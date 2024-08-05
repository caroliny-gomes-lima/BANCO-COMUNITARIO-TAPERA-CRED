<h3>Portas de Saída</h3>
Definição: As portas de saída são interfaces que definem como o sistema interage com sistemas externos, como bancos de dados, serviços de notificação, etc.

- As portas de saída se comunicam com o banco de dados. Elas representam os pontos de integração do sistema com os repositórios de dados e outros serviços externos(api externas com banco de dados externos). Elas definem as interfaces que os adaptadores de saída (como repositórios de banco de dados, serviços externos, etc.) devem implementar para interagir com a aplicação. Elas são implementadas por repositórios ou serviços que traduzem chamadas internas para interações externas.

- Interação com Use Cases: Os use cases chamam essas interfaces para realizar operações necessárias em sistemas externos.

- Exemplo de scripts para implementar:

```bash
account.repository.ts
transaction.repository.ts
```

- exemplo:

```bash
tipo as interfaces do java que definem metodos
esquece intefaces do typescript
export interface AccountRepository {
  save(account: Account): Promise<Account>;
  findAll(): Promise<Account[]>;
  findById(id: string): Promise<Account>;
}
```
