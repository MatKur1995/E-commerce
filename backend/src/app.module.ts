import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductService } from './products/services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductDetailsController } from './product-details/product-details.controller';
import { ProductDetailsService } from './product-details/product-details.service';
import { BasketController } from './basket/basket.controller';
// import { BasketService } from './basket/services/basket.service';
import { BasketModule } from './basket/basket.module';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/service/comments.service';
import { CommentsModule } from './comments/comments.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb', // określenie typu bazy danych
      host: 'localhost', // domyślny host dla XAMPP
      port: 3306, // domyślny port dla MariaDB i MySQL w XAMPP
      username: 'root', // domyślny użytkownik XAMPP
      password: '', // domyślne ustawienia XAMPP nie wymagają hasła
      database: 'onlineshop', // nazwa bazy danych, którą chcesz użyć
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // ścieżka do twoich encji
      synchronize: true, // automatyczna synchronizacja schematu bazy (używaj ostrożnie)
    }),
    TypeOrmModule.forFeature([Product]),
    UsersModule,
    AuthModule,
    BasketModule,
    CommentsModule, //
  ],
  controllers: [
    AppController,
    ProductsController,
    ProductDetailsController,
    BasketController,
  ],
  providers: [AppService, ProductService, ProductDetailsService],
})
export class AppModule {}
