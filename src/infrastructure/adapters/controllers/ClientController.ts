/*
Definição dos Controllers:
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
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateClientDto } from 'src/domain/dtos/CreateClientDto';
import { CreateClientUseCase } from 'src/app/useCases/client/CreateClientUseCase';
import { FindClientUseCase } from 'src/app/useCases/client/FindClientUseCase';

@Controller('clients')
export class ClientController {
  constructor(
    private readonly createClientUseCase: CreateClientUseCase,
    private readonly findClientUseCase: FindClientUseCase,
  ) {}

  @Get('findClient/:id')
  encontrarCliente(@Param('id') id: string) {
    try {
      const clienteData = this.findClientUseCase.execute(id);
      return {
        statusCode: HttpStatus.FOUND,
        message: 'Cliente encontrado com sucesso',
        data: clienteData,
      };
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Erro ao enontrar cliente cliente',
          },
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Erro ao enontrar cliente cliente',
            error: 'Unknown error',
          },
          HttpStatus.NOT_FOUND,
        );
      }
    }
  }

  @Post('registerClient')
  async create(@Body() createClientDto: CreateClientDto) {
    try {
      const clientData =
        await this.createClientUseCase.execute(createClientDto);

      return {
        satusCode: HttpStatus.CREATED,
        message: 'Cliente criado com sucesso',
        data: clientData,
      };
    } catch (error: unknown) {
      console.error(error);
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
