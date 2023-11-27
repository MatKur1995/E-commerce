import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { OrderService } from './services/orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrderService) {}

    @UseGuards(JwtAuthGuard)
    @Post('checkout')
    async checkout(@Req() req): Promise<void> {
        const userId = req.user.id; // assuming your JWT strategy adds the user object to the request
        return this.orderService.checkout(userId);
    }
}
