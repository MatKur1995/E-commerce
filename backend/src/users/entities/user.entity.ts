// src/users/user.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

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
