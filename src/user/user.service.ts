import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../auth/user.schema';
const bcrypt = require('bcryptjs');

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async register(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({ email, password: hashedPassword });
    return newUser.save();
  }

  async findOrCreateGoogleUser(
    email?: string,
    googleId?: string,
  ): Promise<User> {
    let user!: User;
    if (email) {
      user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        user = new this.userModel({ email });
        await user.save();
      }
    }

    if (googleId) {
      user = await this.userModel.findOne({ googleId }).exec();
      if (!user) {
        user = new this.userModel({ googleId });
        await user.save();
      }
    }
    return user;
  }
}
