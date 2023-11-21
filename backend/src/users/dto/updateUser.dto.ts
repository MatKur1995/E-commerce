import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, Matches } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsOptional()
    @IsEmail({}, { message: 'Invalid email.' })
    readonly email?: string;

    @IsOptional()
    @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/, {
        message: 'Password is too weak.',
    })
    readonly password?: string;

    @IsOptional()
    readonly passwordConfirm?: string;

    @IsOptional()
    readonly firstName?: string;

    @IsOptional()
    readonly lastName?: string;
}
