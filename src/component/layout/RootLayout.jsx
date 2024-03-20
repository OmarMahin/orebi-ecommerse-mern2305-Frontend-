import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from '../Navbar'

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Outlet />
      <h1>Out</h1>
    </div>
  );
};

export default RootLayout;
