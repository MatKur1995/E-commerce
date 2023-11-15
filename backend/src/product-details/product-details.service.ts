import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductDetailsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  // service
  async findOne(id: number): Promise<Product | undefined> {
    return this.productRepository.findOne({ where: { id } });
  }
}
