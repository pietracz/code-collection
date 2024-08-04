import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Smartphones from "./pages/smartphones";
import Smartwatches from "./pages/smartwatches";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Impressum from "./pages/impressum";
import Contact from "./pages/contact";
import TermsOfUse from "./pages/termsofuse";
import Privacy from "./pages/privacy";
import Error from "./pages/error";
import Product from "./pages/product";
import { CartProvider } from "./components/CartContext";
import Checkout from "./pages/Checkout";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/smartwatches" element={<Smartwatches />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  </CartProvider>
);
