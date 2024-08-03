import { Controller, Post, Get, Body, HttpStatus } from '@nestjs/common';
import { CreateAccountDto } from 'src/app/dtos/create-account.dto';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/domain/models/account';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    return this.accountService.createAccount(createAccountDto);
    HttpStatus.BAD_REQUEST;
  }

  @Get()
  async listAccounts(): Promise<Account[]> {
    return this.accountService.listAccounts();
  }
}
