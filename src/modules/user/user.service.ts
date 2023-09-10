import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getUserById(user_id) {
    const user = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.id= :id', { id: user_id })
      .getOne();

    return user;
  }
}
