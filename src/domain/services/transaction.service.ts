import { Injectable } from '@nestjs/common';
import { TransactionUseCase } from '../ports/in/transaction.use-case';
import { TransactionRepository } from '../ports/out/transaction.repository';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';
import { Transaction } from '../../domain/models/transaction';

@Injectable()
export class TransactionService implements TransactionUseCase {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async execute(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const transaction = new Transaction({
      accountId: createTransactionDto.accountId,
      amount: createTransactionDto.amount,
      type: createTransactionDto.type,
      createdAt: new Date(),
    });
    return await this.transactionRepository.save(transaction);
  }
}
