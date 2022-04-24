import { observable, IObservableArray } from "mobx";
import { CartItem } from "@src/hooks/types";

interface CartStore {
  cartItems: CartItem[]; //IObservableArray<CartItem>;
  checkout: boolean;
  readonly totalPrice: number;
  readonly itemCount: number;
  readonly total: string;
}
const cartStore = observable<CartStore>(
  {
    cartItems: fromLocalStorage<CartItem[]>("cart"), //observable<CartItem>(fromLocalStorage("cart")),
    checkout: false,
    get totalPrice() {
      return this.cartItems
        .map((item) => item.price * item.quantity)
        .reduce((total, price) => {
          total += price;
          return total;
        }, 0);
    },
    get itemCount() {
      return this.cartItems.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    get total() {
      return this.cartItems
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2);
    }
  },
  undefined,
  { deep: true }
);

function fromLocalStorage<T>(key: string) {
  const cartItems = localStorage.getItem(key);
  const storage: T = cartItems ? JSON.parse(cartItems) : [];

  return storage;
}

export default cartStore;
