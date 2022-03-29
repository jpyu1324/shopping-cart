import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import CartContextProvider from "@src/contexts/CartContext";
import ProductsContextProvider from "@src/contexts/ProductsContext";
import reportWebVitals from "@src/reportWebVitals";
import Routes from "@src/routes";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
      </ProductsContextProvider>
    </HelmetProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
