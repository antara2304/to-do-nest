import {
  Inject,
  Injectable,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userSvc: UserService,
    private jwtSvc: JwtService,
  ) {}

  async signin(email: string, pass: string): Promise<any> {
    const user = await this.userSvc.findByEmailID(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { email: user.email, name: user.name, id: user['_id'] };
    const token = await this.jwtSvc.signAsync(payload);

    return { access_token: token };
  }
}
