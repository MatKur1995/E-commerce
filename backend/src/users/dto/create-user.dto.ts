import { IsString, IsNotEmpty, IsEmail, Matches, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username is required.' })
  readonly username: string;

  @IsString()
  @IsNotEmpty({ message: 'Password is required.' })
  // Add regex for password complexity as per your requirement here
  @Matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/, {
    message: 'Password is too weak.',
  })
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly firstName?: string | null;

  @IsString()
  @IsOptional()
  readonly lastName?: string | null;

  @IsEmail({}, { message: 'Invalid email.' })
  @IsNotEmpty({ message: 'Email is required.' })
  readonly email: string;

  // No need for passwordRepeat in DTO, it should be compared in the service or controller.

  // Add more fields as necessary
}
