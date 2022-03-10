import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate, Outlet } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"

function PrivateRoute() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (!isLoading && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
