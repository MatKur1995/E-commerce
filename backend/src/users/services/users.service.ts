// src/users/users.service.ts

import {Injectable, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import {CreateUserDto} from "../create-user.dto";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(createUserDto);
        await user.hashPassword();
        return this.userRepository.save(user);
    }


    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { username } });
        console.log(user); // Dodaj logowanie, aby zobaczyć, czy user jest poprawnie zwracany
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async validate(payload: any) {
        const user = await this.userRepository.findOne({ where: { username: payload.username } });
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        return user; // W req.user znajdzie się teraz zwrócony obiekt użytkownika bez hasła
    }
//dasfdasfdsa
}
