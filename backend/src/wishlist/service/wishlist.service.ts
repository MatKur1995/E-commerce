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
        const user = await this.userRepository.findOneBy({ id: userId });
        const product = await this.productRepository.findOneBy({ id: productId });
        if (!user || !product) {
            throw new Error('User or Product not found');
        }
        const wishlist = await this.wishlistRepository.findOne({
            where: { user: { id: userId } },
            relations: ['items', 'items.product'],
        });
        let wishlistItem = wishlist.items.find(item => item.product && item.product.id === productId);
        if (!wishlistItem) {
            wishlistItem = new WishlistItem();
            wishlistItem.wishlist = wishlist;
            wishlistItem.product = product;
            await this.wishListItemRepository.save(wishlistItem);
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
        // if (!item) {
        //     throw new NotFoundException('No wishlist item found');
        // }
        await this.wishListItemRepository.delete(productId);
    }
}
