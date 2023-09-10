import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { module } from './modules';
import { entity } from './entity';
import { AuthModule } from './modules/auth/auth.module';
import { TwilioModuleSms } from './modules/twilio/twilio.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    // ...module,
    AuthModule,
    TwilioModuleSms,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'bw5deabo52lgufh90ka8-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ublvor5k0tsxrb8i',
      password: 'acC770FOBjzzsrGj2Te9',
      database: 'bw5deabo52lgufh90ka8',
      entities: [...entity],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
