import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export const ProtectedRoutes = () => {
  const { userState, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }
  console.log(userState);
  return userState ? <Outlet /> : <Navigate to="/login" />;
};
