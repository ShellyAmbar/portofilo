import types from "../types";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return { type: types.REMOVE_FROM_CART, payload: data };
    })
    .catch(err => {
      console.log(err);
      return {
        type: types.ERROR_REMOVE_FROM_CART,
        payload: "Error with remove product."
      };
    })
    .finally(console.log("finished"));
};
