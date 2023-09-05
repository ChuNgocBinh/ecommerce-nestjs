import {
  Controller,
  Get,
  Post,
  HttpStatus,
  NotFoundException,
  Body,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
// import { Response } from 'src/utility/response';

@Controller('auth')
export class AuthController {
  @Post('/login')
  @HttpCode(401)
  login(@Res() res: Response) {
    // console.log(data);
    console.log(res.req.body);

    // return new Response(data);
    return res.status(204).send('binhcn');
    // throw new NotFoundException();
  }
}
