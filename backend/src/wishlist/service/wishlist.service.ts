import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "../../products/entities/product.entity";
import {User} from "../../users/entities/user.entity";
import {Wishlist} from "../entities/wishlist.entity";
import {WishlistItem} from "../entities/wishlistItem.entity";

@Injectable()
export class WishlistService {

    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Wishlist)
        private wishlistRepository: Repository<Wishlist>,
        @InjectRepository(WishlistItem)
        private wishListItemRepository: Repository<WishlistItem>
    ) {}

    async addProductToWishlist(userId: number, productId: number): Promise<void> {
        // Sprawdzenie istnienia użytkownika
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new Error('User not found');
        }

        // Sprawdzenie istnienia produktu
        const product = await this.productRepository.findOne({ where: { id: productId } });
        if (!product) {
            throw new Error('Product not found');
        }

        // Pobranie wishlisty użytkownika wraz z produktami
        const wishlist = await this.wishlistRepository.findOne({
            where: { user: { id: userId } },
            relations: ['items', 'items.product'],
        });

        // Jeśli wishlist nie istnieje, tworzymy nową
        if (!wishlist) {
            throw new Error('Wishlist not found');
        }

        console.log('Checking for duplicates for product ID:', productId);
        const productExistsInWishlist = wishlist.items.some(item => item.product.id === productId);
        console.log('Product exists in wishlist:', productExistsInWishlist);
        // Jeśli produkt nie istnieje w liście życzeń, dodajemy go
        if (!productExistsInWishlist) {
            const wishlistItem = new WishlistItem();
            wishlistItem.wishlist = wishlist;
            wishlistItem.product = product;
            await this.wishListItemRepository.save(wishlistItem);
        } else {
            throw new Error('Product already in wishlist');
        }
    }



    async findAllItemsOfWishlist (userId: number): Promise<Wishlist> {
        return await this.wishlistRepository.findOne({
            where: { user: { id: userId } },
            relations: ['items', 'items.product'],
        });
    }

    async removeWishlistItem(userId: number, productId: number): Promise<void> {
        const item = await this.wishListItemRepository.findOne({
            where: { id: productId },
        });
        console.log('product id to:', productId)
        await this.wishListItemRepository.delete(productId);
    }

    async clearWishlist(userId: number): Promise<void> {
        const wishlist = await this.wishlistRepository.findOne({
            where: { user: { id: userId } },
            relations: ['items'],
        });
        if (!wishlist) {
            throw new NotFoundException('Wishlist not found');
        }
        await this.wishListItemRepository.remove(wishlist.items);
    }
}
