import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/auth.context";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useContext } from "react";

function PrivateRoute() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoading && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
