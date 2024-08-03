import { Injectable } from '@nestjs/common';
import { CreateAccountUseCase } from '../ports/in/create-account.use-case';
import { ListAccountsUseCase } from '../ports/in/list-accounts.use-case';
import { AccountRepository } from '../ports/out/account.repository';
import { CreateAccountDto } from '../dtos/create-account.dto';
import { Account } from '../../domain/models/account';

@Injectable()
export class AccountService
  implements CreateAccountUseCase, ListAccountsUseCase
{
  constructor(private readonly accountRepository: AccountRepository) {}

  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = new Account({
      clientId: createAccountDto.clientId,
      balance: createAccountDto.initialBalance,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return await this.accountRepository.save(account);
  }

  async listAccounts(): Promise<Account[]> {
    return await this.accountRepository.findAll();
  }
}
