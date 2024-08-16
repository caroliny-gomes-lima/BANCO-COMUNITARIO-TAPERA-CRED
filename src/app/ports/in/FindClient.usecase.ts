//interface como java apenas com métodos
//interface para implementar os useCases (casos de uso)
import { ClientUser } from 'src/domain/models/users/ClientUserModel';

export interface FindClientInterface {
  execute(id: string): Promise<ClientUser | null>;
}
