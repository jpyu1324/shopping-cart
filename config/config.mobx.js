const fs = require("fs");
const appRoot = require("app-root-path").path;

fs.copyFileSync(
  `${appRoot}/src/index/index.mobx.tsx`,
  `${appRoot}/src/index.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/products/useProductsMobx.tsx`,
  `${appRoot}/src/hooks/useProducts.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/cart/useCartMobx.tsx`,
  `${appRoot}/src/hooks/useCart.tsx`
);
