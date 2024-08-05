<h3>Serviços do Domínio</h3>

- São classes que encapsulam lógica de negócio específica do domínio, que não pertence a uma única entidade. Eles lidam com operações complexas que podem envolver múltiplas entidades.

- Responsabilidade: Isolar e encapsular a lógica de negócio complexa, mantendo as entidades focadas em seus próprios estados e comportamentos.

- os validadores podem ser considerados parte dos serviços do domínio quando se trata de encapsular regras e lógica de negócio que precisam ser aplicadas de forma consistente em todo o sistema. Eles são responsáveis por garantir que os dados e operações respeitem as regras de negócio definidas.

- Exemplo de scripts para implementar:

```bash
GerenciamentoDeConta.ts
validarTransacao.ts
```

- exemplo:

```bash
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
