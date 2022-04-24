import { CartItem, Product } from "@src/hooks/types";
import { $cartItems, $checkout } from "@src/states/recoil/atom";
import { getContent, Storage } from "@src/states/recoil/utils";
import { useRecoilCallback } from "recoil";

interface Dispatcher {
  increase: (Product) => void;
  decrease: (Product) => void;
  addProduct: (Product) => void;
  removeProduct: (Product) => void;
  handleCheckout: () => void;
  clearCart: () => void;
}

const dispatcher = (): Dispatcher => {
  const increase = useRecoilCallback<[product: Product], void>(
    ({ snapshot, set }) =>
      (product) => {
        const cartItems = [...getContent(snapshot, $cartItems)];

        const idx = cartItems.findIndex((item) => item.id === product.id);
        if (idx !== -1) {
          cartItems[idx] = {
            ...cartItems[idx],
            quantity: cartItems[idx].quantity + 1
          };
        }

        set($cartItems, [...cartItems]);
        Storage(cartItems);
      }
  );

  const decrease = useRecoilCallback<[product: Product], void>(
    ({ snapshot, set }) =>
      (product) => {
        let cartItems = [...getContent(snapshot, $cartItems)];

        const idx = cartItems.findIndex((item) => item.id === product.id);
        if (idx !== -1) {
          cartItems[idx] = {
            ...cartItems[idx],
            quantity: cartItems[idx].quantity - 1
          };
        }

        set($cartItems, [...cartItems]);
        Storage(cartItems);
      }
  );

  const addProduct = useRecoilCallback<[product: Product], void>(
    ({ snapshot, set }) =>
      (product) => {
        let cartItems = getContent(snapshot, $cartItems);

        if (!cartItems.find((item) => item.id === product.id)) {
          const newCartItem: CartItem = {
            ...product,
            quantity: 1
          };
          cartItems = [...cartItems, newCartItem];
        }

        set($cartItems, cartItems);
        Storage(cartItems);
      }
  );

  const removeProduct = useRecoilCallback<[product: Product], void>(
    ({ snapshot, set }) =>
      (product) => {
        const cartItems = getContent(snapshot, $cartItems);

        const newCartItems = cartItems.filter((item) => item.id !== product.id);

        set($cartItems, newCartItems);
        Storage(cartItems);
      }
  );

  const handleCheckout = useRecoilCallback<[], void>(({ set }) => () => {
    const cartItems = [];
    set($cartItems, cartItems);
    set($checkout, true);
    Storage(cartItems);
  });

  const clearCart = useRecoilCallback<[], void>(({ set }) => () => {
    const cartItems = [];
    set($cartItems, cartItems);
    set($checkout, false);
    Storage(cartItems);
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
