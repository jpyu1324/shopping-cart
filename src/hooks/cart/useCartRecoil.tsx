import { $cartItems } from "@src/states/recoil/atom";
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
  return {
    cartItems,
    total,
    itemCount,
    totalPrice,
    ...cartDispatcher
  };
};
