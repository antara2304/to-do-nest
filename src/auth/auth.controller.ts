import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authSvc: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() userData) {
    return this.authSvc.signin(userData.email, userData.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getUserDeatils(@Request() req) {
    console.log(req);
    return req.user;
  }
}
