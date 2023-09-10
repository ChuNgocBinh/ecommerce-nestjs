import {
  BadRequestException,
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/guard/auth.guard';
import { Response } from 'src/utility/response';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('/me')
  async getMe(@Req() req: any) {
    try {
      const user = req.user;

      const userInfo = await this.userService.getUserById(user.id);
      const responseData = {
        id: userInfo.id,
        email: userInfo.email,
        user_name: userInfo.user_name,
        phone_number: userInfo.phone_number,
        address: userInfo.address,
        isActive: userInfo.isActive,
      };

      return new Response(responseData);
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.message);
    }
  }
}
