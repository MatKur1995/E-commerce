
export interface Product {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    category: string;
    platform: string;
    price: number;
    priceBefore?: number;
}
