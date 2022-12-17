import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { StyleHome } from "./style";
import Header from "../../components/header";
import Card from "../../components/card";

export const Home = () => {
  const { userState, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }
  return (
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
  );
};

export default Home;
