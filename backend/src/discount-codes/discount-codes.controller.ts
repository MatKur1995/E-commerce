import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { DiscountCodesService } from './services/discount-codes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateCodeDto } from './dto/create-code.dto';
import {DiscountCode} from "./entities/codes.entity"; // Upewnij się, że ścieżka importu jest prawidłowa

@Controller('discount-codes')
export class DiscountCodesController {
    constructor(private readonly discountCodesService: DiscountCodesService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createCode(@Body() createCodeDto: CreateCodeDto): Promise<DiscountCode> {
        return this.discountCodesService.createCode(
            createCodeDto.code,
            createCodeDto.discountPercentage,
            createCodeDto.codeCreateDate,
        );
    }
}
