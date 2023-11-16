import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn} from 'typeorm';
import { Basket } from './basket.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class BasketItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Basket, basket => basket.items)
  @JoinColumn({ name: 'basketId' }) // This will create the basketId column in the database
  basket: Basket;

  @ManyToOne(() => Product)
  product: Product;

  @Column({ nullable: true }) // This allows you to manually set the basketId if necessary
  basketId: number;

  @Column()
  quantity: number;
}
