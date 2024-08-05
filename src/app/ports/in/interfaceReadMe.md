<h3>Portas de entrada</h3>
- Definição: As portas de entrada são interfaces que definem como as requisições externas (como chamadas HTTP) podem interagir com o sistema.

- Definem interfaces para operações que podem ser iniciadas por solicitações externas. Normalmente são implementadas por controladores(adaptadores), que traduzem essas requisições externas para chamadas de casos de uso.

Portas de Entrada (pasta com nome "In" dentro de Ports) -> (Input Ports): As portas de entrada são os pontos através dos quais o sistema recebe dados ou comandos do mundo externo. São interfaces que representam os pontos de entrada para a lógica de aplicação. Elas permitem que a aplicação receba comandos e dados de fontes externas, como interfaces de usuário, APIs REST, interfaces de linha de comando. Localizadas na camada de apresentação e aplicação. Exemplos incluem controladores REST e interfaces de caso de uso.

- Interação com Use Cases: Os controladores, que atuam como adaptadores de entrada, recebem requisições externas e chamam os use cases.

- Exemplo de scripts para implementar:

```bash
AbrirContaInterface.ts
```

- exemplo:

```bash
export interface AbrirContaInterface {
  abrirConta(clienteId: string, tipo: string): Promise<void>;
}
```
