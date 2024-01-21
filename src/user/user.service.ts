import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(userData: UserDocument): Promise<User> {
    const createdUser = new this.userModel(userData);
    return createdUser.save();
  }

  async findOneUser(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }
  async updateUser(id: string, userData: UserDocument): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(id, userData, { new: false })
      .exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
