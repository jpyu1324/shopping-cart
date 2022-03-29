import React, { useContext } from "react";
import { Product, ProductsContext } from "@src/contexts/ProductsContext";

interface Products {
  products: Product[];
}

export const useProducts = (): Products => {
  const ctx = useContext(ProductsContext);

  return {
    ...ctx
  };
};
