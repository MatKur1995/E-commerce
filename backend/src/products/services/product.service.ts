import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "../entities/product.entity";
import {Repository} from "typeorm";
import {CreateProductDto} from "../create-product.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
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

    async getFilteredProducts(filterOptions: {
        categories?: string[];
        brands?: string[];
        search?: string;
        minPrice?: number | null;
        maxPrice?: number | null;
        sort?: string;
    }): Promise<Product[]> {
        const queryBuilder = this.productRepository.createQueryBuilder('product');

        if (filterOptions.categories && filterOptions.categories.length > 0) {
            queryBuilder.andWhere('product.category IN (:...categories)', { categories: filterOptions.categories });
        }

        if (filterOptions.brands && filterOptions.brands.length > 0) {
            queryBuilder.andWhere('product.brand IN (:...brands)', { brands: filterOptions.brands });
        }

        if (filterOptions.search) {
            queryBuilder.andWhere(
                'product.title LIKE :search',
                { search: `%${filterOptions.search}%` }
            );
        }

        if (filterOptions.minPrice !== null) {
            queryBuilder.andWhere('product.price >= :minPrice', { minPrice: filterOptions.minPrice });
        }

        if (filterOptions.maxPrice !== null) {
            queryBuilder.andWhere('product.price <= :maxPrice', { maxPrice: filterOptions.maxPrice });
        }

        if (filterOptions.sort) {
            const sortOrder = filterOptions.sort === 'lower-price' ? 'ASC' : 'DESC';
            queryBuilder.orderBy('product.price', sortOrder);
        }

        return queryBuilder.getMany();
    }


    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }
}
