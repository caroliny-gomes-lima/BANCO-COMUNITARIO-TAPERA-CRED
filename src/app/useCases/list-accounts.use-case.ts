// Interface para o caso de uso de listagem de contas
import { Account } from '../../../domain/models/account';

export interface ListAccountsUseCase {
  listAccounts(): Promise<Account[]>;
}
