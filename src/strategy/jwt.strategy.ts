import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'asd8f9g8h6j2hL4&5mn8@#$v6skjdh9238s',
    });
  }

  async validate(payload: any) {
    return { userId: payload.id, email: payload.email };
  }
}
