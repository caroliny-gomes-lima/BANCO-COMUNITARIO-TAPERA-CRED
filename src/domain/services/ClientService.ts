/*ClientService:
Definição do ClientService classe responsavel
pela implementação da lógica de negócios centralizada, 
aplicando regras e operações que garantem que a aplicação 
funcione conforme o esperado.
 */

import { CreateClientDto } from '../dtos/CreateClientDto';
import { ClientUser } from '../models/users/ClientUserModel';
import { UserValidator } from '../services/validator/UserValidator';

export class ClientService {
  private clients: ClientUser[] = [];
  public createClient(createClientDto: CreateClientDto): ClientUser {
    // Validações
    this.validateClientData(createClientDto);

    // Cria um novo cliente
    const newClient = new ClientUser(
      createClientDto.id,
      createClientDto.fullName,
      createClientDto.email,
      createClientDto.password,
      createClientDto.cpf,
    );
    this.clients = [...this.clients, newClient];
    return newClient;
  }

  public getClientById(id: string): ClientUser {
    const client = this.clients.find((client) => client.getId() === id);
    console.log('client data #########', client);
    return client;
  }

  private validateClientData(createClientDto: CreateClientDto): void {
    //console.log('validateClientData #########', createClientDto);
    UserValidator.verifyEmail(createClientDto.email);
    UserValidator.verifyPassword(createClientDto.password);
    UserValidator.isValidId(createClientDto.id);
    UserValidator.isValidFullName(createClientDto.fullName);
    UserValidator.verifyCpf(createClientDto.cpf);
  }
}
