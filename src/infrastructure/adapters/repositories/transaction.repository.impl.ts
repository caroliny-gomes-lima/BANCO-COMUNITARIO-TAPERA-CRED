import { Injectable } from '@nestjs/common';
import { Transaction } from '../../domain/models/transaction';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransactionEntity } from '../database/transaction.entity';
import { TransactionRepository } from 'src/app/ports/out/transaction.repository';

@Injectable()
export class TransactionRepositoryImpl implements TransactionRepository {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: Repository<TransactionEntity>,
  ) {}

  async save(transaction: Transaction): Promise<Transaction> {
    const transactionEntity = this.toEntity(transaction);
    const savedTransaction =
      await this.transactionRepository.save(transactionEntity);
    return this.toDomain(savedTransaction);
  }

  private toEntity(transaction: Transaction): TransactionEntity {
    return {
      id: transaction.id,
      accountId: transaction.accountId,
      amount: transaction.amount,
      type: transaction.type,
      createdAt: transaction.createdAt,
    };
  }

  private toDomain(transactionEntity: TransactionEntity): Transaction {
    return new Transaction({
      id: transactionEntity.id,
      accountId: transactionEntity.accountId,
      amount: transactionEntity.amount,
      type: transactionEntity.type,
      createdAt: transactionEntity.createdAt,
    });
  }
}
