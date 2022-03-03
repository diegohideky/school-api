import { Controller, Request, Post, UseGuards, Body, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { hashSync } from 'bcrypt';
import configuration from 'src/config/configuration';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  async create(@Body() createUserDto: CreateUserDto) {
    const { email, username, password, confirmPassword } = createUserDto;
    const existingUser = await this.usersService.findOne({
      $or: [
        { email },
        { username }
      ]
    });

    if (existingUser) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'User with email or username already exists.',
      }, HttpStatus.BAD_REQUEST);
    }

    const hasValidPassword = this.authService.validatePassword(password, confirmPassword);

    if (!hasValidPassword) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Password is not equal or do not follow pattern.',
      }, HttpStatus.BAD_REQUEST);
    }

    const user = { ...createUserDto, password: hashSync(createUserDto.password, configuration().password.salt) };
    return this.usersService.create(user);
  }
}
