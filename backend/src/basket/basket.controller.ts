// src/basket/basket.controller.ts

import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  Param,
  UseGuards,
  Req
} from '@nestjs/common';
import { BasketService } from './services/basket.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { Basket } from './entities/basket.entity';

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  // Endpoint do dodawania produktu do koszyka
  @UseGuards(LocalAuthGuard)
  @Post('add')
  async addToBasket(
    @Req() req,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ): Promise<void> {
    return this.basketService.addToBasket(req.user.id, productId, quantity);
  }

  // Endpoint do pobierania koszyka użytkownika
  @UseGuards(LocalAuthGuard)
  @Get()
  async getBasket(@Req() req): Promise<Basket> {
    return this.basketService.getBasketByUserId(req.user.id);
  }

  // Endpoint do usuwania produktu z koszyka
  @UseGuards(LocalAuthGuard)
  @Delete(':id')
  async removeFromBasket(@Param('id') basketItemId: number): Promise<void> {
    return this.basketService.removeFromBasket(basketItemId);
  }
}
