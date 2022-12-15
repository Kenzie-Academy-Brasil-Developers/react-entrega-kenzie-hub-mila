import React, { useState } from "react";
import { StyleCard } from "./style";
import imgPlus from "../../assets/img/Button Plus.svg";
import trash from "../../assets/img/trash.svg";
import ModalRegister from "../../components/modais/edit";

const Card = ({ userState }) => {
  console.log(userState);
  return (
    <StyleCard>
      <div className="headCard container">
        <p>Tecnologias</p>
        <img
          onClick={() => {
            <ModalRegister />;
          }}
          src={imgPlus}
          alt=""
        />
      </div>
      <ul>
        {userState.techs.map((item) => (
          <li>
            <div className="mainCard container">
              <div className="miniCard">
                <p className="title">{item}</p>
                <div className="editCard">
                  <small>Level</small>
                  <img src={trash} alt="" className="trash" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </StyleCard>
  );
};

export default Card;
