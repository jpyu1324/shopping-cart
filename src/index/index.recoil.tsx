import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from "@src/reportWebVitals";
import Routes from "@src/routes";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
