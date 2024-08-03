//import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

//@Entity()
export class AccountEntity {
  //@PrimaryGeneratedColumn('uuid')
  id: string;

  //@Column()
  clientId: string;

  //@Column('decimal')
  balance: number;

  //@Column()
  createdAt: Date;

  //@Column()
  updatedAt: Date;
}

// então os providers são classes que podem ser usadas dentro da própria 
// camada e os exports são classes que podem ser fornecidas para outra
// camada