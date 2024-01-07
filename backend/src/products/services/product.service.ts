import {HttpException, HttpStatus, Injectable, Logger, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import {In, Repository} from 'typeorm';
import { CreateProductDto } from '../create-product.dto';
import {Comment} from "../../comments/entities/comments.entity";
import { FindOptionsWhere } from 'typeorm';
import {CommentReplies} from "../../comments-replies/entities/comments-replies.entity";
import {WishlistItem} from "../../wishlist/entities/wishlistItem.entity";
import {OrderItem} from "../../orders/entitnies/ordersItem.entity";
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
    @InjectRepository(CommentReplies)
    private commentsRepliesRepository: Repository<CommentReplies>,
    @InjectRepository(WishlistItem)
    private wishListItemRepository: Repository<WishlistItem>,
    @InjectRepository(OrderItem)
    private orderItemRepository: Repository<OrderItem>,
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

  async editProduct(id: number, createProductDto: CreateProductDto): Promise<Product> {
    try {
      console.log("Edycja produktu o ID:", id); // Logowanie ID produktu
      console.log("Otrzymane dane:", createProductDto); // Logowanie danych otrzymanych od użytkownika

      const product = await this.productRepository.findOne({where: { id: id }});
      if (!product) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }

      Object.assign(product, createProductDto);
      return this.productRepository.save(product);
    } catch (error) {
      throw new HttpException(`Cannot edit product: ${error.message}`, HttpStatus.BAD_REQUEST);
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

  async deleteProduct(id: number): Promise<void> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Znajdź ID komentarzy dla produktu
    const comments = await this.commentsRepository.find({
      where: { product: { id } },
      select: ['id'] // wybierz tylko pole 'id'
    });
    const commentIds = comments.map(c => c.id);

    // Usuń odpowiedzi dla tych komentarzy
    await this.commentsRepliesRepository.delete({
      comment: { id: In(commentIds) } // użyj operatora IN
    });

    // Usuń komentarze
    await this.commentsRepository.delete({ product: { id } });

    await this.orderItemRepository.delete({ product: { id } });

    // Usuń powiązane rekordy z wishlist_item
    await this.wishListItemRepository.delete({ product: { id } });

    // Usuń produkt
    await this.productRepository.delete(id);
  }


}
