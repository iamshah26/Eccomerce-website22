import React from "react";
import Product from "./pages/Product";
import { Home } from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
export const App = () => {
  return (
    <div>
      <div className="atWrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="ProductList" element={<ProductList />} />
            <Route path="Product" element={<Product />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
