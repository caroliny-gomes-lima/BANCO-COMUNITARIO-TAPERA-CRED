import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepositoryImpl } from './infrastructure/repositories/account.repository.impl';
import { TransactionRepositoryImpl } from './infrastructure/repositories/transaction.repository.impl';
import { AccountEntity } from './infrastructure/database/account.entity';
import { TransactionEntity } from './infrastructure/database/transaction.entity';
import { TransactionController } from './infrastructure/adapters/controllers/transaction.controller';
import { AccountController } from './infrastructure/adapters/controllers/account.controller';
import { AccountService } from './app/services/account.service';
import { TransactionService } from './app/services/transaction.service';
import { typeOrmConfig } from './infrastructure/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([AccountEntity, TransactionEntity]),
  ],
  controllers: [AccountController, TransactionController],
  providers: [
    AccountService,
    TransactionService,
    { provide: 'AccountRepository', useClass: AccountRepositoryImpl },
    { provide: 'TransactionRepository', useClass: TransactionRepositoryImpl },
  ],
})
export class AppModule {}
