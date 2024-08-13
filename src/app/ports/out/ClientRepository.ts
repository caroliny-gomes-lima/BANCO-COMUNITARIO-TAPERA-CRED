/*
 *PASSO 2
 Definição das portas de entrada que são interfaces com metodos 
 que definem como as requisições externas (como chamadas HTTP) 
 podem interagir com o sistema.(Como as interfaces do java)
 */
import { ClientUser } from 'src/domain/models/users/ClientUserModel';

export interface ClientInterface {
  save(user: ClientUser): Promise<ClientUser>;
}
