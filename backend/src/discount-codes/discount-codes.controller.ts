import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { Request } from 'express';
import { DiscountCodesService } from './services/discount-codes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateCodeDto } from './dto/create-code.dto';
import { DiscountCode } from "./entities/codes.entity";
import { Product } from '../products/entities/product.entity';

@Controller('discount-codes')
export class DiscountCodesController {
    constructor(private readonly discountCodesService: DiscountCodesService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createCode(@Req() req: Request, @Body() createCodeDto: CreateCodeDto): Promise<DiscountCode> {
        console.log('Request body:', req.body);
        return this.discountCodesService.createCode(
          createCodeDto.code,
          createCodeDto.discountPercentage,
          createCodeDto.codeCreateDate,
        );
    }

    @UseGuards(JwtAuthGuard)
    @Post('check')
    async checkCode(@Body('code') code: string): Promise<DiscountCode> {
        console.log('Received discount code:', code);
        return this.discountCodesService.checkCode(code);
    }

    @Get()
    async getAllDiscountCodes(): Promise<DiscountCode[]> {
        return this.discountCodesService.getDiscountCodes();
    }
}
