import { product } from "./productReducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  product: product
});
