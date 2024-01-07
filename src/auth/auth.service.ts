import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userSvc: UsersService,
    private jwtSvc: JwtService,
  ) {}
  async signin(username: string, password: string): Promise<any> {
    const user = await this.userSvc.findOne(username);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    // const { pass, ...result } = user;
    const payload = { sub: user.userId, username: user.username };
    return { accesss_token: await this.jwtSvc.signAsync(payload) };
  }
}
