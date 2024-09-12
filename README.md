<div align="center">
<h1>Status do projeto</h1>
</div>
<div align="center"><strong>Em desenvolvimento</strong></div><br/>
<div align="center">
  <div style="display: inline_block">
  <img src="https://private-user-images.githubusercontent.com/74038190/241763895-fa83eeb9-f4e2-4d85-93f0-688af11babf8.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYxNzE3NDUsIm5iZiI6MTcyNjE3MTQ0NSwicGF0aCI6Ii83NDAzODE5MC8yNDE3NjM4OTUtZmE4M2VlYjktZjRlMi00ZDg1LTkzZjAtNjg4YWYxMWJhYmY4LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTEyVDIwMDQwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY5MTQxOGI2YmMyNjI5N2VmMjM1YzAzYjM3MDFiNDVkNjJmZDkzNDI0NmQwZThkNWU3ZjYzMjEzZDkxOTVmMzUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.UkcFEDZNPkZxCFz5pVquKb3TE3LKgeQlJWTeIViBlPA" width="150">
    <img src="https://user-images.githubusercontent.com/74038190/216655818-2e7b9a31-49bf-4744-85a8-db8a2577c45c.gif" width="150">
  </div>
</div>


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
