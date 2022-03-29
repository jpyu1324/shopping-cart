import React, { createContext, useState } from "react";
import { dummyProducts } from "@src/services/products";
import { useEffect } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

export const ProductsContext = createContext<{ products: Product[] }>({
  products: []
});

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // fake api call
  useEffect(() => {
    setTimeout(() => {
      setProducts(() => dummyProducts);
    }, 2000);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
