import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Basket} from '../../basket/entities/basket.entity';
import {BasketItem} from '../../basket/entities/basketItem.entity';
import {Order} from '../../orders/entitnies/orders.entity';
import {OrderItem} from '../entitnies/ordersItem.entity';
import {getInjectionProviders} from "@nestjs/common/module-utils/utils";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Basket)
        private basketRepository: Repository<Basket>,
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
        @InjectRepository(OrderItem)
        private orderItemRepository: Repository<OrderItem>,
        @InjectRepository(BasketItem)
        private basketItemRepository: Repository<BasketItem>
    ) {
    }

    async checkout(userId: number): Promise<void> {
        // Retrieve the user's basket
        const basket = await this.basketRepository.findOne({
            where: { user: { id: userId } },
            relations: ['items', 'items.product'],
        });

        if (!basket) {
            throw new Error('Basket not found');
        }

        // Create a new order
        const newOrder = this.orderRepository.create({ user: { id: userId } });
        const savedOrder = await this.orderRepository.save(newOrder);

        // Convert basket items to order items
        const orderItems = basket.items.map(basketItem => {
            const orderItem = this.orderItemRepository.create({
                order: savedOrder,
                product: basketItem.product,
                quantity: basketItem.quantity,
            });
            return orderItem;
        });

        // Save order items
        await this.orderItemRepository.save(orderItems);

        // Remove each basket item individually to avoid foreign key constraint error
        for (const item of basket.items) {
            await this.basketItemRepository.remove(item);
        }

        // Optionally remove the basket if it's no longer needed
        // await this.basketRepository.remove(basket);
    }
}
