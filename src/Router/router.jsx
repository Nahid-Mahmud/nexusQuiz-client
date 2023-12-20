import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLalyout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Quizes from "../Pages/Quizes/Quizes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <Login />,
        path: "logIn",
      },
      {
        element: <SignUp />,
        path: "signUp",
      },
      {
        element: <Quizes />,
        path: "quizes",
      },
    ],
  },
]);
export default router;
