import { Module } from '@nestjs/common';
import { TwilioController } from './twilio.controller';
import { TwilioServiceSms } from './twilio.service';
import { TwilioModule } from 'nestjs-twilio';
@Module({
  imports: [
    TwilioModule.forRoot({
      accountSid: 'AC1502b9c492e3b2b9bd88f4c276214721',
      authToken: '670f6fb45053e365b4e8a194ae472012',
    }),
  ],
  controllers: [TwilioController],
  providers: [TwilioServiceSms],
})
export class TwilioModuleSms {}
