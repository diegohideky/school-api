/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne({username});
        const isCorrectPassword = compareSync(pass, user.password);
        if (user && isCorrectPassword) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }

    async generateToken(user: any) {
        const payload = { 
            username: user.usame, 
            sub: user._id,
            role: user.role
        };

        return {
            token: this.jwtService.sign(payload),
        };
      }
}
