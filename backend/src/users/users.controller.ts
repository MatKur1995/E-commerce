// src/users/users.controller.ts

import {
    Body,
    Controller,
    Post,
    UseGuards,
    Req,
    HttpCode,
    HttpStatus, Get, Param, Patch,
} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UsersService} from './services/users.service';
import {LocalAuthGuard} from '../auth/local-auth.guard';
import {AuthService} from '../auth/services/auth.service';
import {User} from './entities/user.entity';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UpdateUserDto} from "./dto/updateUser.dto";

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private authService: AuthService,
    ) {
    }

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

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(@Req() req): Promise<User> {
        return this.usersService.getProfile(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('profile')
    async updateProfile(@Req() req, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.usersService.updateProfile(req.user.id, updateUserDto);
    }

}
