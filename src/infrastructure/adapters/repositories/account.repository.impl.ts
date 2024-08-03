import { Injectable } from '@nestjs/common';
import { Account } from '../../domain/models/account';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountEntity } from '../database/account.entity';
import { AccountRepository } from 'src/app/ports/out/account.repository';

@Injectable()
export class AccountRepositoryImpl implements AccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,
  ) {}

  async save(account: Account): Promise<Account> {
    const accountEntity = this.toEntity(account);
    const savedAccount = await this.accountRepository.save(accountEntity);
    return this.toDomain(savedAccount);
  }

  async findAll(): Promise<Account[]> {
    const accounts = await this.accountRepository.find();
    return accounts.map((account) => this.toDomain(account));
  }

  async findById(id: string): Promise<Account> {
    const account = await this.accountRepository.findOneBy({ id });
    if (!account) {
      throw new Error('Account not found');
    }
    return this.toDomain(account);
  }

  private toEntity(account: Account): AccountEntity {
    return {
      id: account.id,
      clientId: account.clientId,
      balance: account.balance,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
    };
  }

  private toDomain(accountEntity: AccountEntity): Account {
    return new Account({
      id: accountEntity.id,
      clientId: accountEntity.clientId,
      balance: accountEntity.balance,
      createdAt: accountEntity.createdAt,
      updatedAt: accountEntity.updatedAt,
    });
  }
}
