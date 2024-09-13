/*
useCases:
Contêm a lógica de aplicação encontrar o cliente
 */
import { Inject, Injectable } from '@nestjs/common';
import { FindClientInterface } from 'src/app/ports/in/FindClient.usecase';
import { ClientInterface } from 'src/app/ports/out/ClientRepository';
import { ClientUser } from 'src/domain/models/users/ClientUserModel';
import { ClientService } from 'src/domain/services/ClientService';

@Injectable()
export class FindClientUseCase implements FindClientInterface {
  constructor(
    @Inject('ClientInterface')
    private readonly clientRepository: ClientInterface,
    private readonly clientService: ClientService,
  ) {}
  async execute(id: string): Promise<ClientUser | null> {
    const newClient = this.clientService.getClientById(id);
    //console.log('!!!!!!!!!!!!', newClient);
    return await this.clientRepository.findById(newClient.getId());
  }
}
