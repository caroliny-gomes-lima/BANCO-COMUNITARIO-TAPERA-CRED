<h3>DTOs</h3>

- Data Transfer Objects são objetos usados para transferir dados entre diferentes camadas ou partes de um sistema. Os dados são extraídos das entidades(model) de domínio e transformados em DTOs para serem enviados para outra parte do sistema, como uma API ou uma interface externa. Quando um serviço ou controlador precisa enviar dados de uma entidade de domínio para uma API externa, ele pode usar um DTO para encapsular esses dados

```bash
create-account.dto
create-transaction.dto
```
