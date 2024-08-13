import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { CreateClientUseCase } from './useCases/client/CreateClientUseCase';
//import { ClienteRpositoryImpl } from 'src/infrastructure/adapters/database/ClientRepositoryImpl';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [DomainModule, InfrastructureModule],
  controllers: [],
  providers: [CreateClientUseCase],
  exports: [CreateClientUseCase],
})
export class ApplicationModule {}
