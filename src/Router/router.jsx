import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLalyout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Quizes from "../Pages/Quizes/Quizes";
import SingleQuiz from "../Pages/Quizes/SingleQuiz";
import Statistics from "../Pages/Statistics";
import PrivateRoute from "../PrivaateRoute/PrivateRoute";
import AddQuiz from "../Pages/AddQuiz/AddQuiz";
import QuizActions from "../Pages/QuizActions/QuizActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404</div>,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Login />,
        path: "/logIn",
      },
      {
        element: <SignUp />,
        path: "/signUp",
      },
      {
        element: (
          <PrivateRoute>
            <Quizes />
          </PrivateRoute>
        ),
        path: "quizes",
      },
      {
        element: (
          <PrivateRoute>
            <SingleQuiz />
          </PrivateRoute>
        ),
        path: "quiz/:id",
        loader: ({ params }) => {
          // console.log(params);
          return fetch(`${import.meta.env.VITE_baseUrl}/quiz/${params.id}`);
        },
      },
      {
        path: "statistics",
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "/addQuiz",
        element: <AddQuiz />,
      },
      {
        path: "/quiz-actions",
        element: <QuizActions />,
      },
    ],
  },
]);
export default router;
