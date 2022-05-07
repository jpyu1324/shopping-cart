const fs = require("fs");
const appRoot = require("app-root-path").path;

fs.copyFileSync(
  `${appRoot}/src/index/index.redux.tsx`,
  `${appRoot}/src/index.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/products/useProductsRedux.tsx`,
  `${appRoot}/src/hooks/useProducts.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/cart/useCartRedux.tsx`,
  `${appRoot}/src/hooks/useCart.tsx`
);
