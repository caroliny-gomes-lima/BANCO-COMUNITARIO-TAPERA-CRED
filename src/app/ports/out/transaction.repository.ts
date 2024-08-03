import { Transaction } from '../../../domain/models/transaction';

export interface TransactionRepository {
  save(transaction: Transaction): Promise<Transaction>;
}
