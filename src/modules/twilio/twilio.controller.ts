import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { TwilioServiceSms } from './twilio.service';
import { Response } from 'src/utility/response';

@Controller('sms')
export class TwilioController {
  constructor(private twilioService: TwilioServiceSms) {}
  @Post('/get-code-sms')
  async getCodeSms(@Body() data: any) {
    try {
      await this.twilioService.getCodeSms(data);
      return new Response({});
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }

  @Post('/verify-code-sms')
  async verifyCodeSms(@Body() data: any) {
    try {
      await this.twilioService.verifyCodeSms(data);
      return new Response({});
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }
}
