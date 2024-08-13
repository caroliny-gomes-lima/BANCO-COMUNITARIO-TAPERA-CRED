<h3>Camada de Aplicação</h3>
-Responsabilidade: A camada de aplicação é responsável por combinar as lógicas de negócios e interagir com as portas de entrada e saída. Os serviços na camada de aplicação implementam casos de uso específicos e coordenam a execução da lógica de negócios, usando interfaces para acessar dados ou interagir com outros sistemas.

É onde você coloca os serviços que implementam casos de uso específicos, como CreateClientService. Esses serviços utilizam as interfaces definidas nas portas de entrada(casos de uso) e saída(repository) para interagir com a lógica de negócios e acessar recursos externos.

- Dentro da pasta aplicação:

```
DTOs
|-CreateClientDto.ts
ports/in
|-CreateClient.usecase.ts
ports/out
|-ClientRepository.ts
|-external.service.ts
useCases/
|-ClientService.ts
```
