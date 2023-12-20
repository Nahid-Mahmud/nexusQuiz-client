import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <NavBar />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
