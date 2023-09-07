import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TwilioModuleSms } from './modules/twilio/twilio.module';

@Module({
  imports: [AuthModule, TwilioModuleSms],
  controllers: [],
  providers: [],
})
export class AppModule {}
