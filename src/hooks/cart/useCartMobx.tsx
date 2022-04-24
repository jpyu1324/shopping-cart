import { useRef } from "react";
import cartStore from "@src/states/mobx/cart";
import cartDispatcher from "@src/states/mobx/dispatcher";

export const useCart = (): any => {
  const dispatcher = useRef(cartDispatcher()).current;
  return {
    cartItems: cartStore.cartItems,
    total: cartStore.total,
    itemCount: cartStore.itemCount,
    totalPrice: cartStore.totalPrice,
    ...dispatcher
  };
};
