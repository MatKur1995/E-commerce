import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Basket } from '../entities/basket.entity';
import { BasketItem } from '../entities/basketItem.entity';
import { Product } from '../../products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(Basket)
    private basketRepository: Repository<Basket>,
    @InjectRepository(BasketItem)
    private basketItemRepository: Repository<BasketItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ) {}

  async addToBasket(userId: number, productId: number, quantity: number): Promise<void> {
    // Szukaj koszyka (Basket) na podstawie klucza obcego 'userId', który jest zdefiniowany w encji Basket.
    const basket = await this.basketRepository.findOneOrFail({
      where: { user: { id: userId } },
    });

    const product = await this.productRepository.findOneOrFail({ where: { id: productId } });

    const basketItem = new BasketItem();
    basketItem.basket = basket;
    basketItem.product = product;
    basketItem.quantity = quantity;

    await this.basketItemRepository.save(basketItem);
  }

  async getBasketByUserId(userId: number): Promise<Basket> {
    return await this.basketRepository.findOne({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'], // Ładuj relacje z encjami BasketItem i Product
    });
  }

  async removeFromBasket(basketItemId: number): Promise<void> {
    await this.basketItemRepository.delete(basketItemId);
  }
}
