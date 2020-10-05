import { Product } from 'types/Product';

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  EMPTY_CART = 'EMPTY_CART',
}

export type CartAction = {
  type: CartActionTypes;
  payload?: {
    product?: Product;
  };
};

export const addToCart = (product: Product) => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      product,
    },
  };
};

export const removeFromCart = (product: Product) => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: {
      product,
    },
  };
};
