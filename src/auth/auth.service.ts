import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Este e-mail já está cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ email, password: hashedPassword });
    await user.save();
    console.log(user, 'cadastro');
    return this.generateToken(user);
  }

  async validateUser(email: string, password: string) {
    console.log(email, password);
    const user = await this.userModel.findOne({ email });
    console.log(user);
    if (!user) {
      throw new BadRequestException('E-mail ou senha inválidos');
    }

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new BadRequestException('E-mail ou senha inválidos');
    }

    return this.generateToken(user);
  }

  generateToken(user: User) {
    return {
      access_token: this.jwtService.sign({ id: user._id, email: user.email }),
    };
  }
  async googleLogin(profile: any) {
    let user = await this.userModel.findOne({ googleId: profile.id });
    if (!user) {
      user = new this.userModel({
        googleId: profile.id,
        email: profile.emails[0].value,
      });
      await user.save();
    }
    return this.generateToken(user);
  }
}
