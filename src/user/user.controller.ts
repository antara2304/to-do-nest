import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserDocument } from 'src/user/user.schema';

@Controller('user')
export class UserController {
  constructor(private userSvc: UserService) {}

  @Post('create')
  async createUser(@Body() userData: UserDocument): Promise<User> {
    return this.userSvc.createUser(userData);
  }

  @Get(':id')
  async findOneUser(@Param('id') id: string): Promise<User> {
    return this.userSvc.findOneUser(id);
  }

  @Get(':userID')
  async findByEmailID(@Param('userID') userID: string): Promise<User> {
    return this.userSvc.findByEmailID(userID);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userData: UserDocument,
  ): Promise<User> {
    return this.userSvc.updateUser(id, userData);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string): Promise<User> {
    return this.userSvc.remove(id);
  }
}
