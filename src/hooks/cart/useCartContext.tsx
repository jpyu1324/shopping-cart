import React, { useContext } from "react";
import { CartContext } from "@src/states/contexts/CartContext";

export const useCart = () => {
  const ctx = useContext(CartContext)!;

  return {
    ...ctx
  };
};
