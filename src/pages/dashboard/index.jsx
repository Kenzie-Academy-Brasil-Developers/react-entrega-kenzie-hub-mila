import React, { useContext } from "react";
import { StyleDashboard } from "./style";
import Header from "../../components/header";
import { UserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { userState } = useContext(UserContext);
  console.log(userState);
  return userState ? (
    <StyleDashboard>
      <Header />
      <div className="div-line">
        <div className="profile container">
          <p>
            <strong>Olá, Name</strong>
          </p>
          <small>Módulo</small>
        </div>
      </div>
      <div className="text-dashboard container">
        <p>
          <strong>Que pena! Estamos em desenvolvimento :(</strong>
        </p>
        <p className="p-text">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </div>
    </StyleDashboard>
  ) : (
    <Navigate to="/" />
  );
};

export default Dashboard;
