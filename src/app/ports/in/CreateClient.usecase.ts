//interface como java apenas com métodos

import { ClientUser } from 'src/domain/models/users/ClientUserModel';
import { CreateClientDto } from '../../../domain/dtos/CreateClientDto';

export interface CreateClientInterface {
  execute(comand: CreateClientDto): Promise<ClientUser>;
}
