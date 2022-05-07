import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/states/redux/store";
import { Product } from "@src/hooks/types";
import cartSlice from "@src/states/redux/reducers/cart";
import {
  itemCountSelector,
  totalPriceSelector,
  totalSelector
} from "@src/states/redux/selectors";

export const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const checkout = useSelector((state: RootState) => state.cart.checkout);

  const itemCount = useSelector(itemCountSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const total = useSelector(totalSelector);

  const dispatch = useDispatch();

  const increase = (product: Product) => {
    dispatch(cartSlice.actions.increase(product));
  };
  const decrease = (product: Product) => {
    dispatch(cartSlice.actions.decrease(product));
  };
  const addProduct = (product: Product) => {
    dispatch(cartSlice.actions.addProduct(product));
  };
  const removeProduct = (product: Product) => {
    dispatch(cartSlice.actions.removeProduct(product));
  };
  const handleCheckout = () => {
    dispatch(cartSlice.actions.handleCheckout());
  };
  const clearCart = () => {
    dispatch(cartSlice.actions.clearCart());
  };

  return {
    cartItems,
    checkout,
    itemCount,
    totalPrice,
    total,
    increase,
    decrease,
    addProduct,
    removeProduct,
    handleCheckout,
    clearCart
  };
};
