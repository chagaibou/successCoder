import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import AppNav from "./routes/AppNav.js";

export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
