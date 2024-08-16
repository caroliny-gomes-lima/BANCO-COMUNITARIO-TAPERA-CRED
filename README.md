<p align="center">
  <h3>A estrutura do projeto segue os princípios da arquitetura hexagonal (também conhecida como arquitetura de portas e adaptadores).</h3>
</p>

```
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
|   |--app.module.ts
|   |--main.ts
|--test/
|  |--app.controller.spec.ts
|  |--app.e2e-spec.ts
|  |--jest-e2e.json
|--.eslintrc.js
|--.gitignore
|--.prettierrc
|--docker-compose.yml
|--Dockerfile
|--nest-cli.json
|--package.json
|--tsconfig.json
```
