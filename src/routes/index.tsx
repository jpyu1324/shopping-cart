import React from "react";
import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route
} from "react-router-dom";

import Store from "@src/pages/store";
import About from "@src/pages/About";
import NotFound from "@src/pages/NotFound";
import Cart from "@src/pages/cart";

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
