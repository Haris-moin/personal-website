import React from "react";
import Header from "../components/header";
import Home from "../components/home";
import Footer from "../components/footer";
import { Route, Routes } from "react-router-dom";

function LayoutScreens() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Footer />
    </>
  );
}

export default LayoutScreens;
