// Interface para o caso de uso de transações
import { CreateTransactionDto } from '../../dtos/create-transaction.dto';
import { Transaction } from '../../../domain/models/transaction';

export interface TransactionUseCase {
  execute(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
}
