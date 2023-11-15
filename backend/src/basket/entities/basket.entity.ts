// src/basket/basket.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { BasketItem } from './basketItem.entity';

@Entity()
export class Basket {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.basket)
  @JoinColumn()
  user: User;

  @OneToMany(() => BasketItem, basketItem => basketItem.basket)
  items: BasketItem[];
}
