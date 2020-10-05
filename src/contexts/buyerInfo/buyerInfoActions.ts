import { Buyer } from 'types/Buyer';

export enum BuyerInfoActionTypes {
  FILL_BUYER_INFO = 'FILL_BUYER_INFO',
  EMPTY_BUYER_INFO = 'EMPTY_BUYER_INFO',
}

export type BuyerInfoAction = {
  type: BuyerInfoActionTypes;
  payload?: {
    buyerInfo?: Buyer;
  };
};

export const fillBuyerForm = (buyerInfo: Buyer) => {
  console.log('buyerInfo: ', buyerInfo);

  return {
    type: BuyerInfoActionTypes.FILL_BUYER_INFO,
    payload: {
      buyerInfo,
    },
  };
};

export const emptyBuyerForm = () => {
  return {
    type: BuyerInfoActionTypes.EMPTY_BUYER_INFO,
  };
};
