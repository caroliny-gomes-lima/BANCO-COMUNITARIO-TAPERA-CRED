export class CreateTransactionDto {
  accountId: string;
  amount: number;
  type: 'credit' | 'debit';
}
