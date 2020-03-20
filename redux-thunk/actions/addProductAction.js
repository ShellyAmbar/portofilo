import types from "../types";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return { type: types.ADD_TO_CART, payload: data };
    })
    .catch(err => {
      console.log(err);
      return {
        type: types.ERROR_ADD_TO_CART,
        payload: "Error with add product."
      };
    })
    .finally(console.log("finished"));
};
