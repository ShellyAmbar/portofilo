import types from "../types";

const initialState = {
  token: "",
  message: "",
  user_id: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        message: ""
      };
    case types.ERROR_LOGIN_USER:
      return {
        ...state,
        message: action.payload
      };
    case types.SIGNUP_USER:
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        message: ""
      };
    case types.ERROR_SIGNUP_USER:
      return {
        ...state,
        message: action.payload
      };

    default:
      return {
        ...state
      };
  }
}
