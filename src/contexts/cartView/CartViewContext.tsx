import { createContext, Dispatch, useContext, useReducer } from 'react';
import { CartViewAction } from './cartViewActions';
import { cartViewReducer } from './cartViewReducer';

export type CartViewState = {
  cartViewVisible: boolean;
};

const initialState: CartViewState = {
  cartViewVisible: false,
};
const CartViewDispatchContext = createContext<Dispatch<CartViewAction>>(
  undefined,
);
const CartViewStateContext = createContext(initialState);

export const CartViewProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch]: [
    state: CartViewState,
    dispatch: Dispatch<CartViewAction>,
  ] = useReducer(cartViewReducer, initialState);

  return (
    <CartViewDispatchContext.Provider value={dispatch}>
      <CartViewStateContext.Provider value={state}>
        {children}
      </CartViewStateContext.Provider>
    </CartViewDispatchContext.Provider>
  );
};

export const useCartView = () => useContext(CartViewStateContext);
export const useDispatchCartView = () => useContext(CartViewDispatchContext);
