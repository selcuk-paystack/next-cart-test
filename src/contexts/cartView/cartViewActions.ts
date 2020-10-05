export enum CartViewActionTypes {
  TOGGLE_CART_VIEW = 'TOGGLE_CART_VIEW',
}

export type CartViewAction = {
  type: CartViewActionTypes;
};

export const toggleCartView = () => {
  return {
    type: CartViewActionTypes.TOGGLE_CART_VIEW,
  };
};
