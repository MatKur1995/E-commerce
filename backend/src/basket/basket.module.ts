import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasketService } from './services/basket.service';
import { Basket } from './entities/basket.entity';
import { BasketItem } from './entities/basketItem.entity';
import { Product } from '../products/entities/product.entity';
import {WishlistModule} from "../wishlist/wishlist.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Basket, BasketItem, Product]), // Rejestrujesz encje tutaj
  ],
  providers: [BasketService],
  exports: [TypeOrmModule.forFeature([Basket]), BasketService], // Eksportujesz BasketService, aby był dostępny w innych modułach
})
export class BasketModule {}
