import { Injectable } from '@nestjs/common';
import { TwilioService } from 'nestjs-twilio';
const servicesSID = 'VA067353d57a9487621f8e9b1838dde51d';
@Injectable()
export class TwilioServiceSms {
  constructor(private twilioService: TwilioService) {}
  async getCodeSms(data) {
    const { phoneNumber, lang } = data;
    const result = await this.twilioService.client.verify.v2
      .services(servicesSID)
      .verifications.create({
        to: phoneNumber,
        channel: 'sms',
        locale: lang || 'en',
      });
    return result;
  }

  async verifyCodeSms(data) {
    const { phoneNumber, code } = data;
    if (!phoneNumber || !code) {
      throw new Error('field can not blank');
    }
    const result = await this.twilioService.client.verify.v2
      .services(servicesSID)
      .verificationChecks.create({ to: phoneNumber, code });

    if (result.status === 'pending') {
      throw new Error('Wrong phone number');
    }
  }
}
