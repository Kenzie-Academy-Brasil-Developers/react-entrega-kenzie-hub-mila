import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import { ProtectedRoutes } from "../components/protectedRoutes";
import Register from "../components/register";
import Home from "../pages/home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
