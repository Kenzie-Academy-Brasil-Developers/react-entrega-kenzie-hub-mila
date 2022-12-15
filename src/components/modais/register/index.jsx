import React from "react";
import { StyleModalRegister } from "./style";
import blackBackground from "../../../assets/img/black_background.png";

export const ModalRegister = () => {
  return (
    <StyleModalRegister>
      <img src={blackBackground} alt="" />
      <div className="modalCard">
        <div className="modalTitle">
          <p>Cadastrar Tecnologia</p>
        </div>
        <div className="modalInfo">
          <label htmlFor="nome">Nome</label>
          <input type="text" />
          <label htmlFor="nome">Selecionar status</label>
          <select name="nome" id="status">
            <option value="iniciante">Iniciante</option>
          </select>
          <button className="button-pink">Cadastrar Tecnologia</button>
        </div>
      </div>
    </StyleModalRegister>
  );
};

export default ModalRegister;
