<h3>Serviços do Domínio</h3>

- São classes que lidam com a lógica de negócio, exemplo: operações relacionadas ao cliente como criar, deletar, encontrar e atualizar clientes, conforme necessário para atender aos requisitos do domínio da aplicação.

- A camada de serviços de domínio é onde a lógica de negócio central é criada( implementada). O ClientService na camada de domínio é responsável por encapsular e gerenciar a lógica de negócios específica ao trabalhar com clientes.

- os validadores podem ser considerados parte dos serviços do domínio quando se trata de encapsular regras e lógica de negócio que precisam ser aplicadas de forma consistente em todo o sistema. Eles são responsáveis por garantir que os dados e operações respeitem as regras de negócio definidas.

- Exemplo de scripts para implementar:

```
GerenciamentoDeConta.ts
validarTransacao.ts
```

- exemplo:

```
import { Cliente } from '../entities/Cliente';
import { Conta, ContaTipoEnum } from '../entities/Conta';

export class GerenciamentoDeConta {
  abrirConta(cliente: Cliente, tipo: ContaTipoEnum): Conta {
    const novaConta = new Conta(/* parâmetros necessários */);
    cliente.adicionarConta(novaConta);
    return novaConta;
  }

  fecharConta(cliente: Cliente, contaId: string): void {
    cliente.removerConta(contaId);
  }

  mudarTipoConta(cliente: Cliente, contaId: string, novoTipo: ContaTipoEnum): void {
    const conta = cliente.contas.find(conta => conta.id === contaId);
    if (conta) {
      conta.tipo = novoTipo;
    }
  }
}
```
