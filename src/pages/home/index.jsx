import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { StyleHome } from "./style";
import Header from "../../components/header";
import Card from "../../components/card";
import { Navigate } from "react-router-dom";
import ModalEdit from "../../components/modais/edit";

export const Home = () => {
  const { userState, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }
  console.log(userState);
  return userState ? (
    <StyleHome>
      <Header />
      <div className="div-line">
        <div className="profile container">
          <p>
            <strong>Olá, {userState.name}</strong>
          </p>
          <small>{userState.course_module}</small>
        </div>
      </div>
      <Card userState={userState} />
      {/* <ModalEdit /> */}
    </StyleHome>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
