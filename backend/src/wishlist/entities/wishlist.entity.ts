import {
    Column,
    Entity, JoinColumn,
    ManyToOne, OneToMany, OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import {WishlistItem} from "./wishlistItem.entity";

@Entity()
export class Wishlist {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, user => user.wishlist)
    @JoinColumn()
    user: User;

    @OneToMany(() => WishlistItem, wishlistItem => wishlistItem.wishlist)
    items: WishlistItem[];
}
