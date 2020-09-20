import { Product } from 'types/Product';
import { CartActionTypes } from './cartReducer';

export type CartAction = {
  type: CartActionTypes;
  payload?: {
    cartItem?: Product;
  };
};

export const addToCart = (product: Product) => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      cartItem: product,
    },
  };
};

export const removeFromCart = (product: Product) => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      cartItem: product,
    },
  };
};
