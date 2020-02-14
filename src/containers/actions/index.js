import { ActionTypes } from "utils/constants";
import { getProduct } from "services";
export const getData = () => {
  const product = getProduct();
  // console.log("actions ", product);
  return {
    type: ActionTypes.GET_DATA,
    payload: product
  };
};
