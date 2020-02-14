import { ActionTypes } from "utils/constants";
import { getProduct } from "services";
export const getData = productId => {
  const product = getProduct(productId);
  // console.log("actions ", product);
  return {
    type: ActionTypes.GET_DATA,
    payload: product
  };
};
