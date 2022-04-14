import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CartItemsProvider } from "./contexts/cartItems.context";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CartItemsProvider>
      <App />
      </CartItemsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
