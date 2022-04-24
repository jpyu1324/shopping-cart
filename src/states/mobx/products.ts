import { observable, IObservableArray } from "mobx";
import { Product } from "@src/hooks/types";

interface ProductStore {
  products: Array<Product>;
}

const productStore = observable<ProductStore>(
  {
    products: []
  },
  undefined,
  { deep: true }
);

export default productStore;
