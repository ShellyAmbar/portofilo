import { createStore, applyMiddleware, rootReducer } from "redux";
import thunk from "redux-thunk";
const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
