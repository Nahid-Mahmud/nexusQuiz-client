import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <NavBar />
        <Outlet></Outlet>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
