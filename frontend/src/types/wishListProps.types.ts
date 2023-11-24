import {Product} from "./product.types";

export interface WishListPropsTypes{
    productId: number;
}

export interface WishlistItem {
    id: number;
    product: Product;
}