import React, { useContext } from "react";
import { CartContext } from "@src/contexts/CartContext";

export const useCart = () => {
  const ctx = useContext(CartContext)!;

  return {
    ...ctx
  };
};
