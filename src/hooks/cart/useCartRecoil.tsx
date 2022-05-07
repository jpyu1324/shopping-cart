import { $cartItems, $checkout } from "@src/states/recoil/atom";
import dispatcher from "@src/states/recoil/dispatcher";
import { $itemCount, $total, $totalPrice } from "@src/states/recoil/selector";
import { useRef } from "react";
import { useRecoilValue } from "recoil";

export const useCart = (): any => {
  const cartDispatcher = useRef(dispatcher()).current;
  const cartItems = useRecoilValue($cartItems);
  const total = useRecoilValue($total);
  const totalPrice = useRecoilValue($totalPrice);
  const itemCount = useRecoilValue($itemCount);
  const checkout = useRecoilValue($checkout);
  return {
    cartItems,
    checkout,
    total,
    itemCount,
    totalPrice,
    ...cartDispatcher
  };
};
