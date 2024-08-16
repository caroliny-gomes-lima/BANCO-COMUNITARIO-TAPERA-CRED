/*
Definição dos useCases:
Contêm a lógica de aplicação e combinam as operações necessárias, 
chamando as portas de entrada e interagindo com as portas de saída 
para acessar dados e executar operações em sistemas externos
 */
import { Inject, Injectable } from '@nestjs/common';
import { ClientInterface } from 'src/app/ports/out/ClientRepository';
import { ClientUser } from 'src/domain/models/users/ClientUserModel';
import { CreateClientInterface } from 'src/app/ports/in/CreateClient.usecase';
import { ClientService } from 'src/domain/services/ClientService';
import { CreateClientDto } from 'src/domain/dtos/CreateClientDto';

@Injectable()
export class CreateClientUseCase implements CreateClientInterface {
  private users: ClientUser[] = [];
  constructor(
    private readonly clientService: ClientService,
    @Inject('ClientInterface')
    private readonly clientRepository: ClientInterface,
  ) {}

  async execute(createClientDto: CreateClientDto): Promise<ClientUser> {
    const newClient = this.clientService.createClient(createClientDto);
    this.users = [...this.users, newClient];
    //console.log('CreateClientUseCase newClient #######', newClient);
    return await this.clientRepository.save(newClient);
  }
}
