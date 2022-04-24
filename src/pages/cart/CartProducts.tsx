import React from "react";
import { observer } from "mobx-react";

import CartItem from "@src/pages/cart/CartItem";
import { useCart } from "@src/hooks/useCart";
import styles from "@src/pages/cart/CartProducts.module.scss";

const CartProducts = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.p__container}>
      <div className="card card-body border-0">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default process.env.REACT_APP_ENV === "mobx"
  ? observer(CartProducts)
  : CartProducts;
