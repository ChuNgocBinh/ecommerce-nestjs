import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private jwtService: JwtService,
  ) {}
  async getUserByEmail(email: string) {
    const user = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.email = :email', { email })
      .getOne();
    return user;
  }

  async createUser(payload) {
    const user = await this.usersRepository.insert(payload);
    return user;
  }

  async updateUser(user_id, payload) {
    const isUpdate = await this.usersRepository
      .createQueryBuilder('users')
      .update(payload)
      .where('users.id = :user_id', { user_id })
      .execute();
    return isUpdate;
  }

  async generateAccessToken(payload) {
    const access_token = await this.jwtService.signAsync(payload);
    return access_token;
  }

  async generateRefreshToken(payload) {
    const access_token = await this.jwtService.signAsync(payload);
    return access_token;
  }
}
