import { Account } from '../../../domain/models/account';

//tipo as interfaces do java que definem metodos 
//esquece intefaces do typescript
export interface AccountRepository {
  save(account: Account): Promise<Account>;
  findAll(): Promise<Account[]>;
  findById(id: string): Promise<Account>;
}
