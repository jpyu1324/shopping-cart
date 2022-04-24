import React, { useContext, useEffect } from "react";
import { Product, ProductsContext } from "@src/states/contexts/ProductsContext";
import { dummyProducts } from "@src/services/products";
interface Products {
  products: Product[];
}

const useProducts = (): Products => {
  const ctx = useContext(ProductsContext);
  const { setProducts } = ctx;
  // fake api call
  useEffect(() => {
    setTimeout(() => {
      setProducts(() => dummyProducts);
    }, 2000);
  }, []);

  return {
    ...ctx
  };
};

export default useProducts;
