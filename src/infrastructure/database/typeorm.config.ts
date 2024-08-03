import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AccountEntity } from './account.entity';
import { TransactionEntity } from './transaction.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Altere o tipo para 'postgres'
  host: 'localhost', // Endereço do servidor PostgreSQL
  port: 5432, // Porta padrão do PostgreSQL
  username: 'usuario_nest', // Seu usuário do PostgreSQL
  password: 'senha_nest', // Sua senha do PostgreSQL
  database: 'banco_comunitario', // Nome do banco de dados
  entities: [AccountEntity, TransactionEntity], // Entidades que você está usando
  synchronize: true, // Sincronize o esquema do banco de dados com as entidades
  // logging: true,  // Opcional: Ativa logs SQL, útil para depuração
};
