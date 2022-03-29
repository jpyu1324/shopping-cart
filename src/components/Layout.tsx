import React from "react";
import Header from "@src/components/shared/Header";
import Footer from "@src/components/shared/Footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/lux/bootstrap.css";

interface LayoutProps {
  title?: string;
  description?: any;
  children?: React.ReactNode;
}

const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <>
      <Helmet>
        <title>
          {title ? title + " - React Boilerplate" : "React.js Boilerplate"}
        </title>
        <meta
          name="description"
          content={description || "React.js Boilerplate"}
        />
      </Helmet>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
