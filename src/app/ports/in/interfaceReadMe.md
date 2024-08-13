<h3>Portas de entrada</h3>
Diretório ports/in

-Função: Contém as interfaces definem como a aplicação pode ser usada. Isso inclui as portas de entrada para a aplicação. Inclui as interfaces de casos de uso que definem como a aplicação pode ser utilizada e quais dados são necessários para os casos de uso.

- nterfaces de Casos de Uso: Definem os métodos que representam os casos de uso da aplicação. Estes são os pontos de entrada para a lógica de negócios.

```
CreateClienteUseCase.ts
```

- exemplo:

```
export interface CreateClienteUseCase {
  execute(comand: CreateClientDto): Promise<ClientUser>;
}
```
