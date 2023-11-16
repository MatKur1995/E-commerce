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
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  // Endpoint do dodawania produktu do koszyka
  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addToBasket(
    @Req() req,
    @Body('productId') productId: number,
    @Body('quantity') quantity: number,
  ): Promise<void> {
    return this.basketService.addToBasket(req.user.id, productId, quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId') // Dodaj parametr ścieżki
  async getBasket(@Param('userId') userId: number): Promise<Basket> {
    return this.basketService.getBasketByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:itemId')
  async removeFromBasket(@Param('itemId') basketItemId: number): Promise<void> {
    return this.basketService.removeFromBasket(basketItemId);
  }

  // W twoim BasketController.ts na backendzie

  @UseGuards(JwtAuthGuard)
  @Delete('delete/:userId/clear')
  async clearBasket(@Param('userId') userId: number): Promise<void> {
    return this.basketService.clearBasket(userId);
  }


}
