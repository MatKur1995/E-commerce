import { Controller, Get, Param } from '@nestjs/common';
import { ProductDetailsService } from './product-details.service';

@Controller('product-details')
export class ProductDetailsController {
  constructor(private readonly productDetailsService: ProductDetailsService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productDetailsService.findOne(+id);
  }
}
