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
    return this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.comments', 'comment')
      .leftJoinAndSelect('comment.user', 'user') // Dołączenie użytkownika, który dodał komentarz
      .select([
        'product',
        'comment.id', 'comment.content', // Wybierasz tylko te kolumny z komentarza, które są potrzebne
        'user.id', 'user.username' // Wybierasz tylko ID i username użytkownika
      ])
      .where('product.id = :id', { id: id })
      .getOne();
  }
}
