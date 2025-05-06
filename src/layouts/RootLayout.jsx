import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div>
      <div className="md:container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default RootLayout;
