import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './service/comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comments.entity';
import { Product } from '../products/entities/product.entity';
import { User } from '../users/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Comment, Product, User])],
  controllers: [CommentsController],
  providers: [CommentsService],
  exports: [TypeOrmModule], // Dodaj tę linię
})
export class CommentsModule {}
