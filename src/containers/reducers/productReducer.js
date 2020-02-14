import { ActionTypes } from "utils/constants";
const initialData = { data: {} };

export const product = (state = initialData, action) => {
  const { GET_DATA } = ActionTypes;
  switch (action.type) {
    case GET_DATA:
      const productData = action.payload;
      return { ...initialData, data: productData };
    default:
      return state;
  }
};
