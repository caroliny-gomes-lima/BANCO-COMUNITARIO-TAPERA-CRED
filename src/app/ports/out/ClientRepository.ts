/*
 Definição das portas de saida 
(integração externa, ou seja com banco de dados ou apis externas)
 */
import { ClientUser } from 'src/domain/models/users/ClientUserModel';

export interface ClientInterface {
  findById(id: string): Promise<ClientUser | null>;
  save(user: ClientUser): Promise<ClientUser>;
}
