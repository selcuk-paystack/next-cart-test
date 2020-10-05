import { BuyerInfoAction, BuyerInfoActionTypes } from './buyerInfoActions';
import { BuyerInfoState, initialState } from './BuyerInfoContext';

export const buyerInfoReducer = (
  state: BuyerInfoState,
  action: BuyerInfoAction,
) => {
  switch (action.type) {
    case BuyerInfoActionTypes.FILL_BUYER_INFO:
      console.log('action: ', action);
      return {
        ...state,
        ...action.payload.buyerInfo,
      };

    case BuyerInfoActionTypes.EMPTY_BUYER_INFO:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
