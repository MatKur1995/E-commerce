// src/users/users.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../create-user.dto';
import * as bcrypt from 'bcryptjs';
import { Basket } from '../../basket/entities/basket.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Basket)
    private basketRepository: Repository<Basket>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    await user.hashPassword();
    const newUser = await this.userRepository.save(user);

    // Utwórz koszyk dla nowego użytkownika
    const basket = new Basket();
    basket.user = newUser;
    await this.basketRepository.save(basket);

    return newUser;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      return { username: user.username, userId: user.id };
    }
    return null;
  }

  // async validate(payload: any) {
  //   const user = await this.userRepository.findOne({
  //     where: { username: payload.username },
  //   });
  //   if (!user) {
  //     throw new UnauthorizedException('User not found');
  //   }
  //   return user; // W req.user znajdzie się teraz zwrócony obiekt użytkownika bez hasła
  // }

  async findByPayload(payload: any): Promise<User> {
    return await this.userRepository.findOne({ where: { id: payload.sub } });
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

}
