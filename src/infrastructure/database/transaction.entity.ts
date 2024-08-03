import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  accountId: string;

  @Column('decimal')
  amount: number;

  @Column()
  type: 'credit' | 'debit';

  @Column()
  createdAt: Date;
}
