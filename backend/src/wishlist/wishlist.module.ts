import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './service/wishlist.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {CommentReplies} from "../comments-replies/entities/comments-replies.entity";
import {Comment} from "../comments/entities/comments.entity";
import {User} from "../users/entities/user.entity";
import {CommentsRepliesController} from "../comments-replies/comments-replies.controller";
import {CommentsRepliesService} from "../comments-replies/services/comments-replies.service";
import {WishlistItem} from "./entities/wishlistItem.entity";
import {Wishlist} from "./entities/wishlist.entity";
import {Product} from "../products/entities/product.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([WishlistItem, Wishlist, Product ,User]),
  ],
  controllers: [WishlistController],
  providers: [WishlistService],
  exports: [WishlistService, TypeOrmModule],
})
export class WishlistModule {}
