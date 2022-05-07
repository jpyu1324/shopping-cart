import { configureStore } from "@reduxjs/toolkit";
import reducer from "@src/states/redux/reducers";

const loggingMiddleware = (store) => (next) => (action) => {
  if (typeof action !== "function") {
    console.log(action);
  }
  next(action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggingMiddleware),
  devTools: process.env.NODE_ENV != "production"
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
