import { CartViewActionTypes } from './cartViewReducer';

export type CartViewAction = {
  type: CartViewActionTypes;
};

export const toggleCartView = () => {
  return {
    type: CartViewActionTypes.TOGGLE_CART_VIEW,
  };
};
