const fs = require("fs");
const appRoot = require("app-root-path").path;

fs.copyFileSync(
  `${appRoot}/src/index/index.context.tsx`,
  `${appRoot}/src/index.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/products/useProductsContext.tsx`,
  `${appRoot}/src/hooks/useProducts.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/cart/useCartContext.tsx`,
  `${appRoot}/src/hooks/useCart.tsx`
);
