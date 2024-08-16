import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { CreateClientUseCase } from './useCases/client/CreateClientUseCase';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { FindClientUseCase } from './useCases/client/FindClientUseCase';

@Module({
  imports: [DomainModule, InfrastructureModule],
  controllers: [],
  providers: [CreateClientUseCase, FindClientUseCase],
  exports: [CreateClientUseCase, FindClientUseCase],
})
export class ApplicationModule {}
