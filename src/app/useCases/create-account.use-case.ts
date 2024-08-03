// Interface para o caso de uso de criação de conta
import { CreateAccountDto } from '../dtos/create-account.dto';
import { Account } from '../../domain/models/account';

export interface CreateAccountUseCase {
  createAccount(createAccountDto: CreateAccountDto): Promise<Account>;
}
