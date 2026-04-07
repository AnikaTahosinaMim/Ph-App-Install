import React from "react";
import { Outlet } from "react-router";
import Navbar from "../componet/nav/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h2>Footer</h2>
    </div>
  );
};

export default MainLayout;
