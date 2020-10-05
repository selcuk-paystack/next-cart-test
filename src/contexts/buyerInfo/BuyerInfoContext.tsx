import { useReducer, useContext, createContext, Dispatch } from 'react';
import { Buyer } from 'types/Buyer';
import { BuyerInfoAction } from './buyerInfoActions';
import { buyerInfoReducer } from './buyerInfoReducer';

export type BuyerInfoState = Buyer;

export const initialState: BuyerInfoState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  shippingLocation: '',
  notes: '',
};

const BuyerInfoStateContext = createContext(initialState);
const BuyerInfoDispatchContext = createContext<Dispatch<BuyerInfoAction>>(
  undefined,
);

export const BuyerInfoProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch]: [
    state: BuyerInfoState,
    dispatch: Dispatch<BuyerInfoAction>,
  ] = useReducer(buyerInfoReducer, initialState);

  return (
    <BuyerInfoDispatchContext.Provider value={dispatch}>
      <BuyerInfoStateContext.Provider value={state}>
        {children}
      </BuyerInfoStateContext.Provider>
    </BuyerInfoDispatchContext.Provider>
  );
};

export const useBuyerInfo = () => useContext(BuyerInfoStateContext);
export const useDispatchBuyerInfo = () => useContext(BuyerInfoDispatchContext);
