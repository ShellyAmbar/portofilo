import types from "../types";

const initialState = {
  products: [],
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {};
    case types.ERROR_FETCH_PRODUCTS:
      return {};
    case types.ADD_TO_CART:
      return {};
    case types.ERROR_ADD_TO_CART:
      return {};
    case types.REMOVE_FROM_CART:
      return {};
    case types.ERROR_REMOVE_FROM_CART:
      return {};
    default:
      return {
        ...state
      };
  }
}
