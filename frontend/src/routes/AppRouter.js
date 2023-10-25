import React from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavigationBar from "../components/Home/NavigationBar";
import Footer from "../components/Home/Footer";
import HomePage from "../pages/HomePage";
import MenPage from "../pages/MenPage";
import SignIn from "../pages/SignInPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import ProductPreview from "../pages/ProductPreviewPage";
import CartMenu from "../pages/CartPage";
import WomenPage from "../pages/WomenPage";
import BackpacksPage from "../pages/BackpacksPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/man" element={<MenPage />} />
          <Route path="/woman" element={<WomenPage />} />
          <Route path="/bags" element={<BackpacksPage />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/product-preview" element={<ProductPreview />} />
          <Route path="*" element={() => "404 NOT FOUND"} />
        </Routes>
        <CartMenu />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
