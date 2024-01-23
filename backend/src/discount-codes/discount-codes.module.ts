import { Module } from '@nestjs/common';
import { DiscountCodesController } from './discount-codes.controller';
import { DiscountCodesService } from './services/discount-codes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountCode } from './entities/codes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountCode])],
  controllers: [DiscountCodesController],
  providers: [DiscountCodesService],
  exports: [TypeOrmModule.forFeature([DiscountCode])],
})
export class DiscountCodesModule {}
