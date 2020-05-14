import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { UserController } from './controllers/user-controller';

@Module({
  imports: [TypeOrmModule.forFeature([
    Users
  ])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController]
})
export class UsersModule {}
