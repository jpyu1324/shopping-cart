import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@src/hooks/types";

type ProductsType = {
  products: Product[];
};
const initialState: ProductsType = {
  products: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    }
  }
});

export default productsSlice;
