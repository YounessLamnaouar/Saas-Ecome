import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Navbar from "./components/Navbar";
import Collection from "./components/Collection";
import LikedProducts from "./pages/LikedProducts";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-cubic",
      offset: 100,
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<PageLayout><Shop /></PageLayout>} />
        <Route path="/liked" element={<PageLayout><LikedProducts /></PageLayout>} />
        <Route path="/collection" element={<PageLayout><Collection /></PageLayout>} />
        <Route path="/product/:id" element={<PageLayout><ProductDetail /></PageLayout>} />
        <Route path="/cart" element={<PageLayout><Cart /></PageLayout>} />
        <Route path="/checkout" element={<PageLayout><Checkout /></PageLayout>} />
        <Route path="/order-confirmation" element={<PageLayout><OrderConfirmation /></PageLayout>} />
      </Routes>

      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="/shop" element={<PageLayout><Shop /></PageLayout>} />
        <Route path="/product/:id" element={<PageLayout><ProductDetail /></PageLayout>} />
        <Route path="/cart" element={<PageLayout><Cart /></PageLayout>} />
        <Route path="/checkout" element={<PageLayout><Checkout /></PageLayout>} />
        <Route path="/order-confirmation" element={<PageLayout><OrderConfirmation /></PageLayout>} />
      </Routes> */}
    </div>
  );
}
