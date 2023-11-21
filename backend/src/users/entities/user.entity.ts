// src/users/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Basket } from '../../basket/entities/basket.entity';
import { Comment } from '../../comments/entities/comments.entity';
import { CommentReplies } from '../../comments-replies/entities/comments-replies.entity';
import {IsNotEmpty, IsEmail, Matches, IsOptional} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;


  @IsOptional()
  @Column({ nullable: true })
  firstName?: string;

  @IsOptional()
  @Column({ nullable: true })
  lastName?: string;

  @Column({ type: 'varchar', unique: true })
  email: string | null;

  @Column({ type: 'varchar' })
  emailRepeat: string;

  @IsOptional()
  @Column({ nullable: true })
  address?: string;

  @IsOptional()
  @Column({ nullable: true })
  street?: string;

  @OneToOne(() => Basket, (basket) => basket.user)
  basket: Basket;

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => CommentReplies, reply => reply.user)
  replies: CommentReplies[];



  async hashPassword(): Promise<void> {
    if (!this.password) {
      throw new Error('Password is not provided.');
    }
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
