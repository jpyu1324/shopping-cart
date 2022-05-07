import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/states/redux/store";
import { Product } from "@src/hooks/types";
import cartSlice from "@src/states/redux/reducers/cart";

export const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const checkout = useSelector((state: RootState) => state.cart.checkout);
  const dispatch = useDispatch();

  const itemCount = useMemo(() => {
    return cartItems.reduce((total, product) => total + product.quantity, 0);
  }, [cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems
      .map((item) => item.price * item.quantity)
      .reduce((total, price) => {
        total += price;
        return total;
      }, 0);
  }, [cartItems]);

  const total = useMemo(() => {
    return cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  }, [cartItems]);

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
