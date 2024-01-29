export default interface DiscountCode {
  id: number;
  code: string;
  discountPercentage: number;
}

export interface DiscountProps {
  calculateTotalSum: () => number;
  onApplyDiscount: (newDiscountPercentage: number) => void;
}
