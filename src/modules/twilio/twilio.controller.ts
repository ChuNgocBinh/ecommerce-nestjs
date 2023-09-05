import { Body, Controller, Post } from '@nestjs/common';

@Controller('sms')
export class TwilioController {
  @Post('/get-code-sms')
  getCodeSms(@Body() data) {
    return data;
  }
}
