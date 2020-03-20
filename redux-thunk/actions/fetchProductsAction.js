import types from "../types";

export const fetchProducts = () => dispatch => {
  fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(data => {
      return { type: types.FETCH_PRODUCTS, payload: data };
    })
    .catch(err => {
      console.log(err);
      return {
        type: types.ERROR_FETCH_PRODUCTS,
        payload: "Error with fetch products."
      };
    })
    .finally(console.log("finished"));
};
