//interface como java apenas com métodos
//interface para implementar os useCases (casos de uso)
import { ClientUser } from 'src/domain/models/users/ClientUserModel';
import { CreateClientDto } from '../../../domain/dtos/CreateClientDto';

export interface CreateClientInterface {
  execute(comand: CreateClientDto): Promise<ClientUser>;
}
