import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { CommentsModule } from '../comments/comments.module';
import {CommentsRepliesModule} from "../comments-replies/comments-replies.module"; // Załóżmy, że tu jest ścieżka do CommentsModule

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]),
        CommentsModule, // Dodaj tę linię
        CommentsRepliesModule
    ],
    controllers: [ProductsController],
    providers: [ProductService],
})
export class ProductsModule {}
