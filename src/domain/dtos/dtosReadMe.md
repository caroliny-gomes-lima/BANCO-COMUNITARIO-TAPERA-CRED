<h3>DTOs</h3>

- Data Transfer Objects são objetos usados para transferir dados entre diferentes camadas ou partes de um sistema. Os dados são extraídos das entidades(model) de domínio e transformados em DTOs para serem enviados para outra parte do sistema, como uma API ou uma interface externa. Quando um serviço ou controlador precisa enviar dados de uma entidade de domínio para uma API externa, ele pode usar um DTO para encapsular esses dados

interação: Os DTOs são fundamentais para garantir a consistência e clareza na comunicação de dados, tanto internamente quanto externamente. Eles padronizam a forma como os dados são transferidos entre diferentes partes do sistema e entre sistemas distintos, facilitando a manutenção e a evolução do software. Em serviços externos, os DTOs ajudam a estruturar e validar os dados enviados e recebidos, garantindo que a integração seja feita de forma segura e eficiente.

- Exemplo de scripts para implementar:

```bash
create-account.dto
create-transaction.dto
```

- exemplo:

```bash
export class CreateAccountDto {
  clientId: string;
  initialBalance: number;
}
```
