// src/users/users.service.ts

import {BadRequestException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { Basket } from '../../basket/entities/basket.entity';
import {UpdateUserDto} from "../dto/updateUser.dto";
import {Wishlist} from "../../wishlist/entities/wishlist.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Basket)
    private basketRepository: Repository<Basket>,
    @InjectRepository(Wishlist)
    private wishlistRepository: Repository<Wishlist>,

  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    await user.hashPassword();
    const newUser = await this.userRepository.save(user);

    const basket = new Basket();
    basket.user = newUser;
    await this.basketRepository.save(basket);
    const wishlist = new Wishlist()
    wishlist.user = newUser
    await this.wishlistRepository.save(wishlist);

    return newUser;
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      return { username: user.username, userId: user.id };
    }
    return null;
  }

  async getProfile(id: number): Promise<User | undefined> {
    return this.userRepository.createQueryBuilder('user')
        .select(['user.id', 'user.username', 'user.firstName', 'user.lastName', 'user.email', 'user.street', 'user.address']) // lista kolumn, które chcesz zwrócić
        .where('user.id = :id', { id })
        .getOne();
  }




  async findByPayload(payload: any): Promise<User> {
    return await this.userRepository.findOne({ where: { id: payload.sub } });
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username } });
  }

  async updateProfile(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({where: {id}});

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }


    if (updateUserDto.password !== updateUserDto.passwordRepeat) {
      throw new BadRequestException('Passwords do not match.');
    }

    if (updateUserDto.email !== updateUserDto.emailRepeat) {
      throw new BadRequestException('Email do not match');
    }

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const emailExists = await this.userRepository.findOne({ where: { email: updateUserDto.email } });
      if (emailExists) {
        throw new BadRequestException('Email already in use.');
      }
      user.email = updateUserDto.email;
    }



    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      user.password = hashedPassword;
    }

    if (updateUserDto.firstName !== undefined) {
      user.firstName = updateUserDto.firstName;
    }

    if (updateUserDto.lastName !== undefined) {
      user.lastName = updateUserDto.lastName;
    }

    if (updateUserDto.address !== undefined) {
      user.address = updateUserDto.address;
    }

    if (updateUserDto.street !== undefined) {
      user.street = updateUserDto.street;
    }

    await this.userRepository.save(user);

    return user;
  }


}
