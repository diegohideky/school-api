/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {
      const user = {...createUserDto, password: hashSync(createUserDto.password, 10)}
    return this.usersService.create(user);
  }
}
