import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, Product } from "@src/hooks/types";
import { Storage } from "@src/states/recoil/utils";

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
    increase(state, action: PayloadAction<Product>) {
      const cartItems = state.cartItems;
      const idx = cartItems.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) {
        cartItems[idx].quantity++;
      }
      Storage(cartItems);
    },
    decrease(state, action: PayloadAction<Product>) {
      const cartItems = state.cartItems;
      const idx = cartItems.findIndex((item) => item.id === action.payload.id);
      if (idx !== -1) {
        cartItems[idx].quantity--;
      }
      Storage(cartItems);
    },
    addProduct(state, action: PayloadAction<Product>) {
      const cartItems = state.cartItems;
      if (!cartItems.find((item) => item.id === action.payload.id)) {
        cartItems.push({
          ...action.payload,
          quantity: 1
        });
      }
      Storage(cartItems);
    },
    removeProduct(state, action: PayloadAction<Product>) {
      const cartItems = state.cartItems;
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
