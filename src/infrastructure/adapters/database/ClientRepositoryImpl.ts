/*
 *PASSO 7
Adaptadores de saída para o banco de dados
São as implementações das interfaces da porta de saida, 
que traduzem as chamadas internas para interações com sistemas externos. 
Fornecem a lógica específica para interagir com bancos de dados ou serviços externos.
(é como se fosse o services)*/
import { InjectRepository } from '@nestjs/typeorm';
import { ClientInterface } from 'src/app/ports/out/ClientRepository';
import { ClientUser } from 'src/domain/models/users/ClientUserModel';
import { Repository } from 'typeorm';

export class ClienteRpositoryImpl implements ClientInterface {
  constructor(
    @InjectRepository(ClientUser)
    private readonly clientRepository: Repository<ClientUser>,
  ) {}

  async save(client: ClientUser): Promise<ClientUser> {
    console.log('ClienteRpositoryImpl ########', client);
    return this.clientRepository.save(client);
  }
}
