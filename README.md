<p align="center">
  <h3>A estrutura do projeto segue os princípios da arquitetura hexagonal (também conhecida como arquitetura de portas e adaptadores).</h3>
</p>

```bash
src/
|-- domain/
|   |-- models/
|   |-- services/
|
|-- application/
|   |-- use-cases/
|   |-- ports/
|   |   |-- in/
|   |   |-- out/
|   |   |   |-- externalService/
|
|-- infrastructure/
|   |-- adapters/
|   |   |-- controllers/
|   |   |-- database/
|   |   |-- externalService/
```
