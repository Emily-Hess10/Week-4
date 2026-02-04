import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import "./App.css";



function App() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 99.99 },
    { id: 2, name: "Smart Watch", price: 249.99 },
    { id: 3, name: "Bluetooth Speaker", price: 79.99 }
  ];

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

 return (
  <>
    <Header cartCount={cart.length} />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/products"
        element={<ProductsPage products={products} addToCart={addToCart} />}
      />
      <Route
        path="/cart"
        element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
      />
    </Routes>
  </>
);

}

export default App;
