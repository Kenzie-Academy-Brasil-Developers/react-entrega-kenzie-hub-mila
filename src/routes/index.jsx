import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";
import Dashboard from "../pages/dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
