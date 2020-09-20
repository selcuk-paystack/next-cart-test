import { CartViewState } from './CartViewContext';

export enum CartViewActionTypes {
  TOGGLE_CART_VIEW = 'TOGGLE_CART_VIEW',
}

export const cartViewReducer = (state: CartViewState, action) => {
  switch (action.type) {
    case CartViewActionTypes.TOGGLE_CART_VIEW:
      return {
        ...state,
        cartViewVisible: !state.cartViewVisible,
      };
    default:
      return state;
  }
};
