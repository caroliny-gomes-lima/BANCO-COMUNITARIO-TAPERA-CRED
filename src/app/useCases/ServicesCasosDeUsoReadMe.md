<h3>Serviços da aplicação que implementam casos de uso</h3>

- Os services que implementam casos de uso ficam dentro da camada de aplicação. Os service são os responsáveis por implementar os casos de uso. Eles utilizam as entidades e interfaces da camada de domínio e dependem das portas de saída para interagir com o mundo externo.

- Responsabilidade: A camada de aplicação combina a execução da lógica de negócios, coordenando as interações entre as portas de entrada e saída e a camada de domínio. Ela não contém a coordenação das operações necessárias para implementar um caso de uso específico.

Enquanto os services na camada de aplicação utilizam a lógica e as regras de negócio, eles mesmos não são a lógica de negócio pura. Eles servem para combinar e coordenar a aplicação dessa lógica no contexto de casos de uso específicos.

- Dentro da pasta aplicação/casos de uso:

```
ClientService.ts
```
