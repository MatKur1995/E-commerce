// src/auth/strategies/jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/services/users.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // Tutaj załóżmy, że w payloadzie mamy `username`:
    const user = await this.usersService.validateUser(
      payload.username,
      payload.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user; // W req.user znajdzie się teraz zwrócony obiekt użytkownika bez hasła
  }
}
