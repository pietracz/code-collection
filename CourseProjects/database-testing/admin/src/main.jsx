import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/*         <Route path="/customer" element={<Customer />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} /> */}
        {/*<Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  </>
);
