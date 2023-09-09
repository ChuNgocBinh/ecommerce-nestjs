import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { LoginDto, RegisterDto } from 'src/dto/auth.dto';
import { AuthService } from './auth.service';
import { message } from 'src/constants/constant';
import { Response } from 'src/utility/response';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const { email, phoneNumber, username, password } = registerDto;
      const user = await this.authService.getUserByEmail(email);
      if (user) {
        throw new BadRequestException(message.existed_user);
      }
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPassword = bcrypt.hashSync(password, salt);

      const data = {
        email,
        phone_number: phoneNumber,
        user_name: username,
        password: hashPassword,
      };
      const isCreate = await this.authService.createUser(data);

      return new Response(isCreate);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const { email, password } = loginDto;
      const user = await this.authService.getUserByEmail(email);

      if (!user) {
        throw new BadRequestException(message.user_not_found);
      }
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        throw new BadRequestException(message.password_not_match);
      }
      const dataUser = {
        id: user.id,
        email: user.email,
        phone_number: user.phone_number,
        address: user.address,
        profile_picture: user.profile_picture,
        isActive: user.isActive,
      };
      const access_token = await this.authService.generateAccessToken(dataUser);
      const refresh_token = await this.authService.generateRefreshToken(
        dataUser,
      );

      const isUpdate = await this.authService.updateUser(user.id, {
        access_token,
        refresh_token,
      });
      if (!isUpdate) {
        throw new BadRequestException(message.server_error);
      }
      return new Response({
        dataUser,
        token: access_token,
        refresh_token,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
