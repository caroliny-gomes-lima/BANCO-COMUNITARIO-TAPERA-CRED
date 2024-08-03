export class Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: 'credit' | 'debit';
  createdAt: Date;

  constructor(init?: Partial<Transaction>) {
    Object.assign(this, init);
  }
}
