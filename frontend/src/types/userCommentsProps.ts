import { Product } from './product.types';
import React from 'react';

// Define the props type for UsersComments
export interface UsersCommentsProps {
  productDetails: Product | undefined;
  setProductDetails: React.Dispatch<React.SetStateAction<Product | undefined>>;
  activeComment: boolean;
}