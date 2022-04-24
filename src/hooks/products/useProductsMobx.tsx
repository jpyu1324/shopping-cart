import { useEffect } from "react";

import { dummyProducts } from "@src/services/products";
import { Product } from "@src/hooks/types";
import productStore from "@src/states/mobx/products";

type Products = { products: Product[] };

const useProducts = (): Products => {
  // fake api call
  useEffect(() => {
    setTimeout(() => {
      productStore.products = dummyProducts;
    }, 2000);
  }, []);

  return { products: productStore.products };
};

export default useProducts;
