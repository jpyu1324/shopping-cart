import { RootState } from "@src/states/redux/store";
import { createSelector } from "@reduxjs/toolkit";

const cartItems = (state: RootState) => state.cart.cartItems;
const itemCountSelector = createSelector(cartItems, (cartItems) => {
  return cartItems.reduce((total, product) => total + product.quantity, 0);
});

const totalPriceSelector = createSelector(cartItems, (cartItems) => {
  return cartItems
    .map((item) => item.price * item.quantity)
    .reduce((total, price) => {
      total += price;
      return total;
    }, 0);
});
const totalSelector = createSelector(cartItems, (cartItems) => {
  return cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
});

export { itemCountSelector, totalPriceSelector, totalSelector };
