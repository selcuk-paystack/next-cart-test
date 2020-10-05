import { CartViewAction, CartViewActionTypes } from './cartViewActions';
import { CartViewState } from './CartViewContext';

export const cartViewReducer = (
  state: CartViewState,
  action: CartViewAction,
) => {
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
