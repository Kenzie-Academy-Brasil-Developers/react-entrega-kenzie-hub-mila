import React, { useContext } from "react";
import { StyleModalRegister } from "./style";
import blackBackground from "../../../assets/img/black_background.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../../context/userContext";

export const ModalRegister = () => {
  const { createCard } = useContext(UserContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => createCard(data);

  return (
    <StyleModalRegister>
      <img src={blackBackground} alt="" />
      <div className="modalCard">
        <div className="modalTitle">
          <p>Cadastrar Tecnologia</p>
        </div>
        <form className="modalInfo" onSubmit={handleSubmit(onSubmitFunction)}>
          <label htmlFor="nome">Nome</label>

          <input
            type="text"
            placeholder="Insira o nome da tecnologia aqui"
            {...register("title")}
          />
          {errors.text?.message}

          <label htmlFor="nome">Selecionar status</label>
          <select name="status" {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button className="button-pink">Cadastrar Tecnologia</button>
        </form>
      </div>
    </StyleModalRegister>
  );
};

export default ModalRegister;
