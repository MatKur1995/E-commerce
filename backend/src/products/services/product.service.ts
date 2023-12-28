import {HttpException, HttpStatus, Injectable, Logger, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../create-product.dto';
import {Comment} from "../../comments/entities/comments.entity";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const newProduct = this.productRepository.create(createProductDto);
      await this.productRepository.save(newProduct);
      return newProduct;
    } catch (error) {
      throw new HttpException('Cannot save product', HttpStatus.BAD_REQUEST);
    }
  }

  async getFilteredProducts(options: {
    page: number;
    limit: number;
    sort?: string;
    categories?: string[];
    brands?: string[];
    search?: string;
    minPrice?: number; // Add this
    maxPrice?: number; // And this
  }): Promise<{ data: Product[]; total: number; page: number; limit: number }> {
    const {
      page,
      limit,
      sort,
      categories,
      brands,
      search,
      minPrice,
      maxPrice,
    } = options;

    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (categories && categories.length > 0) {
      queryBuilder.andWhere('product.category IN (:...categories)', {
        categories,
      });
    }

    if (brands && brands.length > 0) {
      queryBuilder.andWhere('product.brand IN (:...brands)', {
        brands,
      });
    }

    if (search) {
      queryBuilder.andWhere('product.title LIKE :search', {
        search: `%${search}%`,
      });
    }

    if (minPrice !== undefined) {
      queryBuilder.andWhere('product.price >= :minPrice', { minPrice });
    }

    if (maxPrice !== undefined) {
      queryBuilder.andWhere('product.price <= :maxPrice', { maxPrice });
    }

    if (sort) {
      const sortOrder = sort === 'lower-price' ? 'ASC' : 'DESC';
      queryBuilder.orderBy('product.price', sortOrder);
    }

    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findHotDeals(): Promise<Product[]> {
    return this.productRepository.find({ where: { hotDeal: true } });
  }

  async findNonHotDeals(): Promise<Product[]> {
    return this.productRepository.find({ where: { hotDeal: false } });
  }

  async toggleHotDeals(productId): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (product) {
      product.hotDeal = !product.hotDeal;
      await this.productRepository.save(product);
    }
    return product;
  }

  async deleteProduct (id): Promise<void> {
    const product = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!product) {
      throw new NotFoundException('Comment not found');
    }

    await this.commentsRepository.delete({ productId: id });
    await this.productRepository.delete(id);
  }
}
