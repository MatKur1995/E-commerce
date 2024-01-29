import {Injectable, NotFoundException} from '@nestjs/common';
import { Repository } from 'typeorm';
import { DiscountCode } from '../entities/codes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../products/entities/product.entity';
import { Order } from '../../orders/entitnies/orders.entity';

@Injectable()
export class DiscountCodesService {
    constructor(
        @InjectRepository(DiscountCode)
        private discountCodeRepository: Repository<DiscountCode>,
    ) {}

    async createCode(code: string, discountPercentage: number, creationDate?: Date): Promise<DiscountCode> {
        const newCode = this.discountCodeRepository.create({
            code,
            discountPercentage,
            codeCreateDate: creationDate || new Date(),
        });

        return this.discountCodeRepository.save(newCode);
    }

    async getDiscountCodes(): Promise<DiscountCode[]> {
        return this.discountCodeRepository.find();
    }

    async checkCode(code: string): Promise<DiscountCode> {
        const discountCode = await this.discountCodeRepository.findOne({ where: { code } });

        if (!discountCode) {
            throw new NotFoundException('Discount code not found');
        }

        return discountCode;
    }

}
