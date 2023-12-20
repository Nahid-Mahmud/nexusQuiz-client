import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../../SharedComponents/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../SharedComponents/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <NavBar />
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
