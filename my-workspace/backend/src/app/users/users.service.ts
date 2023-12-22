

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.usersRepository.save({
      "name": "User Name",
      "email": "user@example.com"
    }
    );
  }

  async findAll(): Promise<User[]> {
    console.log(this.usersRepository.find());
    return this.usersRepository.find();
  }

  // async findOne(id: number): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }

  // async update(id: number, userUpdates: User): Promise<User> {
  //   await this.usersRepository.update(id, userUpdates);
  //   return this.findOne(id);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
