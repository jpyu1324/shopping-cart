import React, { useContext, useEffect } from "react";
import { dummyProducts } from "@src/services/products";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@src/states/redux/store";
import { Product } from "@src/hooks/types";
import productsSlice from "@src/states/redux/reducers/products";

interface Products {
  products: Product[];
}

const useProducts = (): Products => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const setProducts = (products: Product[]) => {
    dispatch(productsSlice.actions.setProducts(products));
  };

  // fake api call
  useEffect(() => {
    setTimeout(() => {
      setProducts(dummyProducts);
    }, 2000);
  }, []);

  return {
    products
  };
};

export default useProducts;
