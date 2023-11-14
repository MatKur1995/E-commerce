// src/users/users.controller.ts

import { Body, Controller, Post, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../users/create-user.dto';
import { UsersService } from './services/users.service';
import { LocalAuthGuard } from "../auth/local-auth.guard";
import { AuthService } from "../auth/services/auth.service";
import {User} from "./entities/user.entity";

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private authService: AuthService,
    ) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Req() req): Promise<any> {
        return this.authService.login(req.user);
    }
}
