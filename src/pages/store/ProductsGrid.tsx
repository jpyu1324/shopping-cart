import React from "react";
import { observer } from "mobx-react";
import ProductItem from "@src/pages/store/ProductItem";
import styles from "@src/pages/store/ProductsGrid.module.scss";

import useProducts from "@src/hooks/useProducts";

const ProductsGrid = () => {
  const { products } = useProducts();

  return (
    <div className={styles.p__container}>
      <div className="row">
        <div className="col-sm-8">
          <div className="py-3">{products.length} Products</div>
        </div>
        <div className="col-sm-4">
          <div className="form-group">
            <input
              type="text"
              name=""
              placeholder="Search product"
              className="form-control"
              id=""
            />
          </div>
        </div>
      </div>
      <div className={styles.p__grid}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.p__footer}></div>
    </div>
  );
};

export default process.env.REACT_APP_ENV === "mobx"
  ? observer(ProductsGrid)
  : ProductsGrid;
