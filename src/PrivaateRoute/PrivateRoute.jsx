import { Navigate, useLocation } from "react-router-dom";
import Loader from "../SharedComponents/Loader";
import { useAuth } from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, userloading } = useAuth();

  if (userloading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/logIn"}></Navigate>;
  }
};

export default PrivateRoute;
