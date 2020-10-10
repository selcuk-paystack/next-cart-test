import { CartState } from './CartContext';
import { CartAction, CartActionTypes } from './cartActions';

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      const foundIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === action.payload.product.id,
      );

      return foundIndex === -1
        ? {
            ...state,
            cartItems: [
              ...state.cartItems,
              {
                count: 1,
                id: action.payload.product.id,
                product: action.payload.product,
              },
            ],
          }
        : {
            ...state,
            cartItems: [
              ...state.cartItems.slice(0, foundIndex),
              {
                ...state.cartItems[foundIndex],
                count: state.cartItems[foundIndex].count += 1,
              },
              ...state.cartItems.slice(foundIndex + 1),
            ],
          };
    }

    case CartActionTypes.REMOVE_FROM_CART: {
      const newCartItems = state.cartItems.map(cartItem => {
        if (cartItem.id === action.payload.product.id) {
          return Object.assign({}, cartItem, {
            count: cartItem.count - 1,
          });
        }

        return cartItem;
      });

      const filteredCartItems = newCartItems.filter(
        cartItem => cartItem.count > 0,
      );

      return {
        ...state,
        cartItems: [...filteredCartItems],
      };
    }
    case CartActionTypes.EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
