//interface como java apenas com métodos

import { ClientUser } from 'src/domain/models/users/ClientUserModel';

export interface FindClientInterface {
  execute(id: string): Promise<ClientUser | null>;
}
