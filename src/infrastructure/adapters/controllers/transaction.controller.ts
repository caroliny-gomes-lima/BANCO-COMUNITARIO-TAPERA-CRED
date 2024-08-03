import { Controller, Post, Body } from '@nestjs/common';
import { CreateTransactionDto } from 'src/app/dtos/create-transaction.dto';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/domain/models/transaction';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    return this.transactionService.execute(createTransactionDto);
  }
}
