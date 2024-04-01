import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from '../Navbar'

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
