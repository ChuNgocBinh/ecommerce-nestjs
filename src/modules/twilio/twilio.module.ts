import { Module } from '@nestjs/common';
import { TwilioController } from './twilio.controller';
import { TwilioServiceSms } from './twilio.service';
import { TwilioModule } from 'nestjs-twilio';
@Module({
  imports: [
    TwilioModule.forRoot({
      accountSid: 'AC1502b9c492e3b2b9bd88f4c276214721',
      authToken: '0dde0f977e4e1943ec1dddbda6919701',
    }),
  ],
  controllers: [TwilioController],
  providers: [TwilioServiceSms],
})
export class TwilioModuleSms {}
