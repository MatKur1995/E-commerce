// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AuthModule, // AuthModule powinien być w tablicy imports
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Eksportuj UsersService jeśli jest używany w innym module
})
export class UsersModule {}
