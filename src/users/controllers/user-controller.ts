import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/users.dto';
import { Users } from '../entity/users.entity';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getOne(@Request() req): Promise<Users> {
    const id = req.user.id;
    return this.usersService.getOne(id)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }
}
