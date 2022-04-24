import { CartItem, Product } from "@src/hooks/types";
import { atom, RecoilState } from "recoil";

export const $products = atom<Product[]>({
  key: "products",
  default: []
});

export const $cartItems = localStorageAtom<CartItem[]>("cart", "cartItems");

export const $checkout = atom<boolean>({
  key: "checkout",
  default: false
});

function localStorageAtom<T>(
  storageKey: string,
  atomKey: string
): RecoilState<T> {
  const cartItems = localStorage.getItem(storageKey);
  const storage: T = cartItems ? JSON.parse(cartItems) : [];

  return atom<T>({
    key: atomKey,
    default: storage
  });
}
