import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientUser } from 'src/domain/models/users/ClientUserModel';

import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { ClientService } from './services/ClientService';

@Module({
  imports: [InfrastructureModule, TypeOrmModule.forFeature([ClientUser])],
  providers: [ClientService],
  exports: [ClientService],
})
export class DomainModule {}
