/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth-guards';
import { LocalAuthGuard } from './guards/local-auth-guards';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService
    ) {}

  @Post('signup')
  create(@Body() createUserDto: CreateUserDto) {

    /**
     * email: string;
     * username: string;
     * password: string;
     * confirmPassword: string;
     * birthDate: Date;
     */

    // validar se a senha tem no mínimo 8 caracteres
    // pelo menos 1 letra maiscula
    // pelo menos 1 letra minuscula
    // pelo menos 1 numero
    // pelo menos 1 caractere especial

      const user = {...createUserDto, password: hashSync(createUserDto.password, 10)}
    return this.usersService.create(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
