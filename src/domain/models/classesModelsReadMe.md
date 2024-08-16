<h3>Classes modelos</h3>

- Objetos do mundo real ou conceitos do domínio de negócio.
  O Domínio núcleo ou o coração do sistema, onde contém a lógica de negócio(ou lógica de domínio) e as regras do negócio fundamentais.

- Exemplo de scripts para implementar:

```bash
account.ts
Transaction.ts
```

- exemplo:

```bash
export class Account {
  id: string;
  clientId: string;
  balance: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<Account>) {
    Object.assign(this, init);
  }
}
```
