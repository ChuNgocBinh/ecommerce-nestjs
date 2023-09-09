import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TwilioModuleSms } from './modules/twilio/twilio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/user.entity';

@Module({
  imports: [
    AuthModule,
    TwilioModuleSms,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bw5deabo52lgufh90ka8-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ublvor5k0tsxrb8i',
      password: 'acC770FOBjzzsrGj2Te9',
      database: 'bw5deabo52lgufh90ka8',
      entities: [Users],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
