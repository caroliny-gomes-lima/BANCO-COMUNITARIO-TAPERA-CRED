<h3>Adaptadores de Entrada ou controllers</h3>

- São responsáveis por lidar com as interfaces externas e garantir que as solicitações sejam traduzidas adequadamente para o formato que o sistema interno possa processar. No contexto do NestJS, os controladores (controllers) frequentemente desempenham esse papel, recebendo requisições HTTP, convertendo os dados conforme necessário e invocando os casos de uso apropriados para manipular a lógica de negócio.

- Interação com Use Cases: Os controladores, que atuam como adaptadores de entrada, recebem requisições externas e chamam os use cases.

- Exemplo de scripts para implementar:

```bash
ContaController.ts
```

- exemplo:

```bash
import { Controller, Post, Body } from '@nestjs/common';
import { AbrirContaUseCase } from '../../application/use-cases/AbrirContaUseCase';
import { AbrirContaDTO } from '../dto/AbrirContaDTO';

@Controller('contas')
export class ContaController {
  constructor(private readonly abrirContaUseCase: AbrirContaUseCase) {}

  @Post()
  async abrirConta(@Body() abrirContaDto: AbrirContaDTO): Promise<void> {
    await this.abrirContaUseCase.abrirConta(abrirContaDto.clienteId, abrirContaDto.tipo);
  }
}
```
