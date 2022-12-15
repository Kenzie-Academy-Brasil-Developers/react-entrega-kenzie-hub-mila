import React from "react";
import { StyleModalEdit } from "./style";
import blackBackground from "../../../assets/img/black_background.png";

const ModalEdit = () => {
  return (
    <StyleModalEdit>
      <img src={blackBackground} alt="" />
      <div className="modalCard">
        <div className="modalTitle">
          <p>Tecnologia - Detalhes</p>
        </div>
        <div className="modalInfo">
          <label htmlFor="nome">Nome do projeto</label>
          <input type="text" />
          <label htmlFor="nome">Status</label>
          <select name="nome" id="status">
            <option value="iniciante">Iniciante</option>
          </select>
          <div className="modalEditButtons">
            <button className="button-pink">Cadastrar Tecnologia</button>
            <button className="button-grey">Excluir</button>
          </div>
        </div>
      </div>
    </StyleModalEdit>
  );
};

export default ModalEdit;
