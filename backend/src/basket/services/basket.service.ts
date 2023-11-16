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
    // Pobierz koszyk użytkownika
    const basket = await this.basketRepository.findOne({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
    });

    if (!basket) {
      console.error(`Basket not found for user ID ${userId}`);
      return;
    }

    if (!basket.items) {
      console.error(`Basket items not found for user ID ${userId}`);
      return;
    }

    // Sprawdź, czy produkt jest już w koszyku
    let basketItem = basket.items.find(item => item.product && item.product.id === productId);

    if (basketItem) {
      // Jeśli tak, zwiększ ilość
      basketItem.quantity += quantity;
      await this.basketItemRepository.save(basketItem);
    } else {
      // Jeśli nie, dodaj nowy produkt do koszyka
      const product = await this.productRepository.findOneOrFail({ where: { id: productId } });
      basketItem = new BasketItem();
      basketItem.basket = basket;
      basketItem.product = product;
      basketItem.quantity = quantity;
      await this.basketItemRepository.save(basketItem);
    }
  }


  async getBasketByUserId(userId: number): Promise<Basket> {
    return await this.basketRepository.findOne({
      where: { user: { id: userId } },
      relations: ['items', 'items.product'],
    });
  }

  async removeFromBasket(basketItemId: number): Promise<void> {
    await this.basketItemRepository.delete(basketItemId);
  }

  async clearBasket(userId: number): Promise<void> {
    const basket = await this.basketRepository.findOne({
      where: { user: { id: userId } },
    });
    if (!basket) {
      console.error(`Basket not found for user ID ${userId}`);
      return;
    }
    await this.basketItemRepository.delete({ basketId: basket.id });
  }

}
