import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={Register} />
      <Route path="/login" element={Login} />
    </Routes>
  );
};
