import React, { createContext, useReducer } from "react";
import {
  CartReducer,
  CartReducerState,
  sumItems
} from "@src/contexts/CartReducer";
import { Product } from "@src/contexts/ProductsContext";

type CartContext =
  | ({
      removeProduct: (payload: any) => void;
      addProduct: (payload: any) => void;
      increase: (payload: any) => void;
      decrease: (payload: any) => void;
      clearCart: () => void;
      handleCheckout: () => void;
    } & CartReducerState)
  | null;

export const CartContext = createContext<CartContext>(null);
const cartItems = localStorage.getItem("cart");
const storage: (Product & { quantity: number })[] = cartItems
  ? JSON.parse(cartItems)
  : [];
const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkout: false
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer<CartReducer>(CartReducer, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    decrease,
    clearCart,
    handleCheckout,
    ...state
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
