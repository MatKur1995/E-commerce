import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrderService } from './services/orders.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {WishlistItem} from "../wishlist/entities/wishlistItem.entity";
import {Wishlist} from "../wishlist/entities/wishlist.entity";
import {Product} from "../products/entities/product.entity";
import {User} from "../users/entities/user.entity";
import {Order} from "./entitnies/orders.entity";
import {OrderItem} from "./entitnies/ordersItem.entity";
import {BasketItem} from "../basket/entities/basketItem.entity";
import {BasketModule} from "../basket/basket.module";

@Module({
  imports: [
    BasketModule, // add BasketModule to imports
    TypeOrmModule.forFeature([Order, OrderItem]),
  ],
  controllers: [OrdersController],
  providers: [OrderService]
})
export class OrdersModule {}
