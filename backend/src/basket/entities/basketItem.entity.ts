import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Basket } from './basket.entity';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class BasketItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Basket, basket => basket.items)
  basket: Basket;

  @ManyToOne(() => Product)
  product: Product;

  @Column()
  quantity: number;
}
