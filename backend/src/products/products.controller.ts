import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  UploadedFile,
  UseInterceptors, Delete, Param, Put,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductService } from './services/product.service';
import { CreateProductDto } from './create-product.dto';
import { Product } from './entities/product.entity';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/products-images',
        filename: (req, file, callback) => {
          const filename: string =
            path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
          const extension: string = path.parse(file.originalname).ext;
          callback(null, `${filename}${extension}`);
        },
      }),
    }),
  )
  async createProduct(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Product> {
    const image = file?.filename || null;
    return this.productService.create({ ...createProductDto, image });
  }

  @Put('edit-product/:id')
  @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads/products-images',
          filename: (req, file, callback) => {
            const filename: string =
                path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;
            callback(null, `${filename}${extension}`);
          },
        }),
      }),
  )
  async editProduct(
      @Body() createProductDto: CreateProductDto,
      @UploadedFile() file: Express.Multer.File,
      @Param('id') id: number,
  ): Promise<Product> {
    console.log("ID produktu:", id);
    console.log("Dane produktu:", createProductDto);
    if (file) {
      console.log("Nazwa pliku obrazu:", file.filename);
    } else {
      console.log("Plik obrazu nie został przesłany");
    }

    const image = file?.filename || null;
    return this.productService.editProduct(id, { ...createProductDto, image });
  }


  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 5,
    @Query('sort') sort: string,
    @Query('categories') categories?: string | string[],
    @Query('brands') brands?: string | string[],
    @Query('search') search?: string,
  ): Promise<{ data: Product[]; total: number; page: number; limit: number }> {
    const categoriesArray =
      typeof categories === 'string' ? categories.split(',') : categories;
    const brandsArray = typeof brands === 'string' ? brands.split(',') : brands;
    return this.productService.getFilteredProducts({
      page,
      limit,
      sort,
      categories: categoriesArray,
      brands: brandsArray,
      search,
    });
  }

  @Get('hot-deals')
  async findHotDeals(): Promise<Product[]> {
    return this.productService.findHotDeals();
  }

  @Post('hot-deals')
  async toggleHotDeals(@Body('id') productId: number): Promise<Product> {
    return this.productService.toggleHotDeals(productId);
  }

  @Get('non-hot-deals')
  async findNonHotDeals(): Promise<Product[]> {
    return this.productService.findNonHotDeals();
  }

  @Delete('delete/:id')
  async deleteProduct(@Param('id') id: number): Promise<void> {
    return this.productService.deleteProduct(id);
  }
}
