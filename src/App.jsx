import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  Products,
  SingleProduct,
  PrivateRoutes,
  AuthWrapper,
} from "./pages";
import { Navbar, Sidebar, Footer } from "./components";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://course-api.com/react-store-products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<SingleProduct />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
