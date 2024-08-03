export class Account {
  id: string;
  clientId: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<Account>) {
    Object.assign(this, init);
  }
}
