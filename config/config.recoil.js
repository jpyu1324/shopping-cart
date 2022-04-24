const fs = require("fs");
const appRoot = require("app-root-path").path;

fs.copyFileSync(
  `${appRoot}/src/index/index.recoil.tsx`,
  `${appRoot}/src/index.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/products/useProductsRecoil.tsx`,
  `${appRoot}/src/hooks/useProducts.tsx`
);
fs.copyFileSync(
  `${appRoot}/src/hooks/cart/useCartRecoil.tsx`,
  `${appRoot}/src/hooks/useCart.tsx`
);
