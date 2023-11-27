import {Body, Controller, Delete, Get, Param, Post, Req, UseGuards} from '@nestjs/common';
import {WishlistService} from "./service/wishlist.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {Comment} from "../comments/entities/comments.entity";
import {Wishlist} from "./entities/wishlist.entity";

@Controller('wishlist')
export class WishlistController {
    constructor(private readonly wishlist: WishlistService) {
    }

    @UseGuards(JwtAuthGuard)
    @Post('add/:productId')
    async addProductToWishlist(
        @Req() req,
        @Param('productId') productId: number,
    ): Promise<void> {
        const userId = req.user.id;
        console.log(productId)
        return this.wishlist.addProductToWishlist(userId, productId);
    }

    @UseGuards(JwtAuthGuard)
    @Get('items')
    async findAllItemsOfWishlist(
        @Req() req,
    ): Promise<Wishlist> {
        const userId = req.user.id;
        return this.wishlist.findAllItemsOfWishlist(userId);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('delete/:productId')
    async removeWishlistItem(
        @Req() req,
        @Param('productId') productId: number,
    ): Promise<void> {
        const userId = req.user.id;
        return this.wishlist.removeWishlistItem(userId, productId);
    }

    @UseGuards(JwtAuthGuard)
    @Delete('clear')
    async clearWishlist(
        @Req() req,
    ): Promise<void> {
        const userId = req.user.id;
        return this.wishlist.clearWishlist(userId);
    }

}
