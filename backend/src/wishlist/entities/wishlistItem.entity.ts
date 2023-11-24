import {Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn} from 'typeorm';
import { Product } from '../../products/entities/product.entity';
import {Wishlist} from "./wishlist.entity";

@Entity()
export class WishlistItem {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Wishlist, wishlist => wishlist.items)
    @JoinColumn({ name: 'wishlistId' }) // This will create the basketId column in the database
    wishlist: Wishlist;

    @ManyToOne(() => Product)
    product: Product;
}
