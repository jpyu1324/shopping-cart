import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "@src/hooks/types";
import { Storage } from "@src/states/recoil/utils";
import { stat } from "fs";
type CartType = {
  cartItems: CartItem[];
  checkout: boolean;
};

const storage = localStorage.getItem("cart");
const cartItems: CartItem[] = storage ? JSON.parse(storage) : [];

const initialState: CartType = {
  cartItems: cartItems,
  checkout: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase(state, action) {
      const cartItems = [...state.cartItems];
      const idx = cartItems.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) {
        cartItems[idx].quantity++;
      }
      state.cartItems = cartItems;
      Storage(cartItems);
    },
    decrease(state, action) {
      const cartItems = [...state.cartItems];
      const idx = cartItems.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) {
        cartItems[idx].quantity--;
      }
      state.cartItems = cartItems;
      Storage(cartItems);
    },
    addProduct(state, action) {
      const cartItems = [...state.cartItems];
      if (!cartItems.find((item) => item.id === action.payload.id)) {
        cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
      state.cartItems = cartItems;
      Storage(cartItems);
    },
    removeProduct(state, action) {
      const cartItems = [...state.cartItems];
      const result = cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = result;
      Storage(cartItems);
    },
    handleCheckout(state) {
      state.cartItems = [];
      state.checkout = true;
      Storage([]);
    },
    clearCart(state) {
      state.cartItems = [];
      state.checkout = false;
      Storage([]);
    }
  }
});

export default cartSlice;
