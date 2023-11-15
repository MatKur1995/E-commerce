export interface BasketItem {
  id: number;
  quantity: number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}
