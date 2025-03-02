import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from './user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { GoogleStrategy } from 'src/strategy/goggle.strategy';
import { LocalAuthGuard } from 'src/guard/local.guard';
import { GoogleAuthGuard } from 'src/guard/google.guard';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.register({ secret: 'asd8f9g8h6j2hL4&5mn8@#$v6skjdh9238s' }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    LocalAuthGuard,
    GoogleAuthGuard,
    UserService,
  ],
})
export class AuthModule {}
