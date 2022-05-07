import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "@src/states/redux/reducers/cart";
import productsSlice from "@src/states/redux/reducers/products";

const reducer = combineReducers({
  products: productsSlice.reducer,
  cart: cartSlice.reducer
});

export default reducer;
