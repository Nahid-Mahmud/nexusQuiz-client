import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLalyout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Quizes from "../Pages/Quizes/Quizes";
import SingleQuiz from "../Pages/Quizes/SingleQuiz";
import Statistics from "../Pages/Statistics";

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
      {
        element: <SingleQuiz />,
        path: "quiz/:id",
        loader: ({ params }) => {
          // console.log(params);
          return fetch(`${import.meta.env.VITE_baseUrl}/quiz/${params.id}`);
        },
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
    ],
  },
]);
export default router;
