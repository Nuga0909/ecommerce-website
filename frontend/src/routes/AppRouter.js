import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "../components/Home/NavigationBar";
import Footer from "../components/Home/Footer";
import HomePage from "../pages/HomePage";
import MenPage from "../pages/MenPage";
import SignIn from "../pages/SignInPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={() => "404 NOT FOUND"} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
