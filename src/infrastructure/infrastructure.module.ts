import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientUser } from 'src/domain/models/users/ClientUserModel';
import { ClientController } from './adapters/controllers/ClientController';
import { ClienteRpositoryImpl } from './adapters/database/ClientRepositoryImpl';
import { ApplicationModule } from 'src/app/aplication.module';

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    TypeOrmModule.forFeature([ClientUser]),
  ],
  controllers: [ClientController],
  providers: [
    ClienteRpositoryImpl,
    { provide: 'ClientInterface', useClass: ClienteRpositoryImpl },
  ],
  exports: [ClienteRpositoryImpl, 'ClientInterface'],
})
export class InfrastructureModule {}
