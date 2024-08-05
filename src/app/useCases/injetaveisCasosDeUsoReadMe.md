<h3>Casos de uso</h3>

- Contêm a lógica de aplicação e combinam as operações necessárias, chamando as portas de entrada e interagindo com as portas de saída para acessar dados e executar operações em sistemas externos

Estão localizados na camada de aplicação, interagem com ambas as portas de entrada e saída para realizar operações e aplicar a lógica de negócio. Os controladores (adaptadores de entrada) recebem requisições externas e chamam os casos de uso, enquanto os adaptadores de saída implementam as interfaces das portas de saída para interagir com sistemas externos.

- Interação com Portas de Entrada: São chamados pelos controladores (adaptadores de entrada) quando uma requisição externa é recebida.

- Interação com Portas de Saída: Chamam as interfaces das portas de saída para realizar operações em sistemas externos, como bancos de dados ou serviços de notificação.

- Dominio: Os casos de uso interagem com o núcleo (domínio) para aplicar as regras de negócio e realizar operações específicas. Eles chamam serviços de domínio e repositórios para garantir que a lógica de negócio seja aplicada corretamente e que as operações sejam persistidas e tratadas conforme necessário. Essa interação garante que a lógica de aplicação e as regras de negócio estejam separadas, promovendo uma arquitetura limpa e organizada.

- Exemplo de scripts para implementar:

```bash
create-account.use-case.ts
list-accounts.use-case.ts
transaction.use-case.ts
```

- exemplo:

```bash
import { CreateAccountDto } from '../dtos/create-account.dto';
import { Account } from '../../domain/models/account';

export interface CreateAccountUseCase {
  createAccount(createAccountDto: CreateAccountDto): Promise<Account>;
}
```
