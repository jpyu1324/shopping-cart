import React, { createContext, useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  photo: string;
}

interface ProductsContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductsContext = createContext<ProductsContextProps>({
  products: [],
  setProducts: () => {}
});

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
