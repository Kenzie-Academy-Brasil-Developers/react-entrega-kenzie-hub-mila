import React, { useContext, useState } from "react";
import { StyleCard } from "./style";
import imgPlus from "../../assets/img/Button Plus.svg";
import trash from "../../assets/img/trash.svg";
import ModalRegister from "../../components/modais/register";
import { UserContext } from "../../context/userContext";

const Card = ({ userState }) => {
  const { deletCard } = useContext(UserContext);

  const [shoModal, setShoModal] = useState(false);
  return (
    <StyleCard>
      {shoModal && <ModalRegister />}
      <div className="headCard ">
        <p>Tecnologias</p>
        <img
          onClick={() => {
            setShoModal(true);
          }}
          src={imgPlus}
          alt=""
        />
      </div>
      <ul>
        <li className="li container">
          <div className="mainCard ">
            {userState.techs.map((item) => (
              <div className="miniCard">
                <p className="title">{item.title}</p>
                <div className="editCard">
                  <small>{item.status}</small>
                  <img
                    src={trash}
                    alt=""
                    className="trash"
                    onClick={() => {
                      deletCard(item.id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </li>
      </ul>
    </StyleCard>
  );
};

export default Card;
