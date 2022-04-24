import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { CartIcon } from "@src/components/icons";
import styles from "@src/components/shared/header.module.scss";
import { useCart } from "@src/hooks/useCart";

const Header = () => {
  const { itemCount } = useCart();

  return (
    <header className={styles.header}>
      <Link to="/">Store</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">
        {" "}
        <CartIcon /> Cart ({itemCount})
      </Link>
    </header>
  );
};

export default process.env.REACT_APP_ENV === "mobx" ? observer(Header) : Header;
