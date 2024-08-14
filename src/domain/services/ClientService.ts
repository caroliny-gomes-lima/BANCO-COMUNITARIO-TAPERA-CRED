/*
 *PASSO 3
Definição do ClientService classe responsavel
pela implementação da lógica de negócios centralizada, 
aplicando regras e operações que garantem que a aplicação 
funcione conforme o esperado.
 */

import { CreateClientDto } from '../dtos/CreateClientDto';
import { ClientUser } from '../models/users/ClientUserModel';
import { UserValidator } from '../services/validator/UserValidator';

export class ClientService {
  public createClient(createClientDto: CreateClientDto): ClientUser {
    // Validações
    this.validateClientData(createClientDto);
    //console.log('DOMAIN ClientService #########', createClientDto);
    // Cria e retorna um novo cliente
    return new ClientUser(
      createClientDto.id,
      createClientDto.fullName,
      createClientDto.email,
      createClientDto.password,
      createClientDto.cpf,
    );
  }

  // public getUserById(id: string): Cliente {

  // }

  private validateClientData(createClientDto: CreateClientDto): void {
    //console.log('validateClientData #########', createClientDto);
    UserValidator.verifyEmail(createClientDto.email);
    UserValidator.verifyPassword(createClientDto.password);
    UserValidator.isValidId(createClientDto.id);
    UserValidator.isValidFullName(createClientDto.fullName);
    UserValidator.verifyCpf(createClientDto.cpf);
  }
}
