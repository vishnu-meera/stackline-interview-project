import { ActionTypes } from "utils/constants";
const initialData = { data: {} };

export const product = (state = initialData, action) => {
  const { GET_DATA } = ActionTypes;
  switch (action.type) {
    case GET_DATA:
      return { ...initialData, data: action.payload };
    default:
      return state;
  }
};
