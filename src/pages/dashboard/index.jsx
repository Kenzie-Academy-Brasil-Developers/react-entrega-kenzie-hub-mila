import React from "react";
import { StyleDashboard } from "./style";
import Header from "../../components/header";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
