import { action } from "mobx";
import { Product } from "@src/hooks/types";
import cartStore from "@src/states/mobx/cart";
import { Storage } from "@src/states/recoil/utils";

interface Dispatcher {
  increase: (Product) => void;
  decrease: (Product) => void;
  addProduct: (Product) => void;
  removeProduct: (Product) => void;
  handleCheckout: () => void;
  clearCart?: () => void;
}

const dispatcher = (): Dispatcher => {
  const increase = action((product: Product) => {
    const cartItems = cartStore.cartItems;
    const idx = cartItems.findIndex((item) => item.id === product.id);
    if (idx !== -1) {
      cartItems[idx].quantity++;
    }
    Storage(cartItems);
  });

  const decrease = action((product: Product) => {
    const cartItems = cartStore.cartItems;
    const idx = cartItems.findIndex((item) => item.id === product.id);
    if (idx !== -1) {
      cartItems[idx].quantity--;
    }
    Storage(cartItems);
  });

  const addProduct = action((product: Product) => {
    const cartItems = cartStore.cartItems;
    if (!cartItems.find((item) => item.id === product.id)) {
      cartItems.push({
        ...product,
        quantity: 1
      });
    }
    Storage(cartItems);
  });

  const removeProduct = action((product: Product) => {
    cartStore.cartItems = cartStore.cartItems.filter(
      (item) => item.id !== product.id
    );
    Storage(cartStore.cartItems);
  });

  const handleCheckout = action(() => {
    cartStore.cartItems = [];
    cartStore.checkout = true;
    Storage(cartStore.cartItems);
  });

  const clearCart = action(() => {
    cartStore.cartItems = [];
    cartStore.checkout = false;
    Storage(cartStore.cartItems);
  });
  return {
    increase,
    decrease,
    addProduct,
    removeProduct,
    handleCheckout,
    clearCart
  };
};

export default dispatcher;
