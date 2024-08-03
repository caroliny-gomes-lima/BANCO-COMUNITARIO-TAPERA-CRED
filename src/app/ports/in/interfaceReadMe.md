<h3>Portas de entrada</h3>
- Definem interfaces para operações que podem ser iniciadas por solicitações externas. Normalmente são implementadas por controladores(adaptadores), que traduzem essas requisições externas para chamadas de casos de uso.

```bash
AbrirContaInterface.ts
```

- exemplo:

```bash
export interface AbrirContaInterface {
  abrirConta(clienteId: string, tipo: string): Promise<void>;
}
```
