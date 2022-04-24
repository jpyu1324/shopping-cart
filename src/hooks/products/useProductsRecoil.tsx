import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { dummyProducts } from "@src/services/products";
import { $products } from "@src/states/recoil/atom";
import { Product } from "@src/hooks/types";

type Products = { products: Product[] };

const useProducts = (): Products => {
  const [products, setProducts] = useRecoilState($products);
  // fake api call
  useEffect(() => {
    setTimeout(() => {
      setProducts(() => dummyProducts);
    }, 2000);
  }, []);
  return { products };
};

export default useProducts;
