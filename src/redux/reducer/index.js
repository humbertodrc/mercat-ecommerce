import {combineReducers  } from "redux";
import { shoppingCartReducer } from './shoppingCartReducer';

const reducer = combineReducers({
  cart: shoppingCartReducer
})

export default reducer;