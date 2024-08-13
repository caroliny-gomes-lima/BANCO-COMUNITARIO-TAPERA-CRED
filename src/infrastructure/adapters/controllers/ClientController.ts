/*
 *PASSO 6
Definição dos Controllers
São responsáveis por lidar com as interfaces externas e garantir 
que as solicitações sejam traduzidas adequadamente para o formato 
que o sistema interno possa processar. No contexto do NestJS, os 
controladores (controllers) frequentemente desempenham esse papel, 
recebendo requisições HTTP, convertendo os dados conforme necessário 
e invocando os casos de uso apropriados para manipular a lógica de 
negócio.*/

import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateClientDto } from 'src/domain/dtos/CreateClientDto';
import { CreateClientUseCase } from 'src/app/useCases/client/CreateClientUseCase';

@Controller('clients')
export class ClientController {
  constructor(private readonly createClientUseCase: CreateClientUseCase) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    try {
      const clientData =
        await this.createClientUseCase.execute(createClientDto);
      console.log('CONTROLLER!!!!!!!!', createClientDto);
      return {
        satusCode: HttpStatus.CREATED,
        message: 'Cliente criado com sucesso',
        data: clientData,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Erro ao criar cliente',
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          {
            statusCode: HttpStatus.BAD_REQUEST,
            message: 'Erro ao criar cliente',
            error: 'Unknown error',
          },
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }
}
