import React from "react";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
