import { SET_PRODUCTS } from "../contants/action-types";
const initialstate = {
  products: [],
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
