import { $cartItems } from "@src/states/recoil/atom";
import { selector } from "recoil";

export const $totalPrice = selector<number>({
  key: "cartItems/totalPrice",
  get: ({ get }) => {
    const cartItems = get($cartItems);

    const totalPrice = cartItems
      .map((item) => item.price * item.quantity)
      .reduce((total, price) => {
        total += price;
        return total;
      }, 0);

    return totalPrice;
  }
});

export const $itemCount = selector<number>({
  key: "cartItems/itemCount",
  get: ({ get }) => {
    const cartItems = get($cartItems);

    const itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return itemCount;
  }
});

export const $total = selector<string>({
  key: "cartItems/total",
  get: ({ get }) => {
    const cartItems = get($cartItems);

    const total = cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
    return total;
  }
});
