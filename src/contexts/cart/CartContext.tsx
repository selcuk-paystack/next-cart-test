import { useReducer, useContext, createContext, Dispatch } from 'react';
import { Product } from 'types/Product';
import { CartAction } from './cartActions';
import { cartReducer } from './cartReducer';

export type CartItem = {
  count: number;
  id: number;
  product: Product;
};

export type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};
const CartStateContext = createContext(initialState);
const CartDispatchContext = createContext<Dispatch<CartAction>>(undefined);

export const CartProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch]: [
    state: CartState,
    dispatch: Dispatch<CartAction>,
  ] = useReducer(cartReducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
