import {Controller, Post, UseInterceptors, UploadedFile, Body, Get, Query} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './services/product.service';
import { CreateProductDto } from './create-product.dto';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import {Product} from "./entities/product.entity";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads/products-images', // ścieżka, gdzie obrazy będą zapisywane
            filename: (req, file, callback) => {
                const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
                const extension: string = path.parse(file.originalname).ext;
                callback(null, `${filename}${extension}`)
            }
        })
    }))

    async createProduct(
        @Body() createProductDto: CreateProductDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        if (file && file.filename) {
            createProductDto.image = file.filename;
        }
        return this.productService.create(createProductDto);
    }

    @Get()
    findAll(
        @Query('categories') categories?: string | string[],
        @Query('brands') brands?: string | string[],
        @Query('search') search?: string,
        @Query('minPrice') minPrice?: string,
        @Query('maxPrice') maxPrice?: string,
        @Query('sort') sort?: string
    ): Promise<Product[]> {
        const min = minPrice ? Number(minPrice) : null;
        const max = maxPrice ? Number(maxPrice) : null;
        return this.productService.getFilteredProducts({
            categories: Array.isArray(categories) ? categories : categories?.split(',') || [],
            brands: Array.isArray(brands) ? brands : brands?.split(',') || [],
            search,
            minPrice: min as number | null,
            maxPrice: max as number | null,
            sort
        });
    }





}
