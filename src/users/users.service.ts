import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { Wallet } from '../wallets/entity/wallet.entity';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
  ) {
    this.users = [
      {
        id: 1,
        username: 'bobroc',
        password: 'changeme',
        firstName: 'bob',
        lastName: 'bobson'
      },
      {
        id: 2,
        username: 'roow',
        password: 'secret',
        firstName: 'rob',
        lastName: 'robson'
      },
      {
        id: 3,
        username: 'maria',
        password: 'guess',
        firstName: 'maria',
        lastName: 'sonson'
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.usersRepository.findOne({
     where: {username: username}
    })
  }

  async getOne(id: string): Promise<Users> {
    return await this.usersRepository.findOne(id, {
      where: {id: id},
      join: {
        alias: "user",
        leftJoinAndSelect: {
          "wallet": "user.wallet",
          "type": "wallet.type",
        }
      },
    relations: ['wallet']});
  }
}
