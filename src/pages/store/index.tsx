import React from "react";
import Layout from "@src/components/Layout";

import ProductsGrid from "@src/pages/store/ProductsGrid";

const Store = () => {
  return (
    <Layout title="Store" description="This is the Store page">
      <div>
        <div className="text-center mt-5">
          <h1>Store</h1>
          <p>This is the Store Page.</p>
        </div>
        <ProductsGrid />
      </div>
    </Layout>
  );
};

export default Store;
