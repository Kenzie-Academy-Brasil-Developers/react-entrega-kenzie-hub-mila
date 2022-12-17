import React, { useContext } from "react";
import { StyleRegister } from "./style";
import Logo from "../../assets/img/logo-kenzie-hub.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

export function Register() {
  const { createAccount } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    bio: yup.string().required("Preencha o campo"),
    contact: yup.string().required("Contato obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => createAccount(data);

  return (
    <StyleRegister>
      <div className="head">
        <img src={Logo} alt="" />
        <button
          className="button-dark"
          onClick={() => {
            navigate("/login");
          }}
        >
          Voltar
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="title">
          <p>Crie sua conta</p>
          <small>Rápido e grátis, vamos nessa!</small>
        </div>
        <label htmlFor="">Nome</label>
        <input placeholder="Digite aqui seu nome..." {...register("name")} />
        {errors.name?.message}
        <label htmlFor="">E-mail</label>
        <input placeholder="Digite aqui seu email..." {...register("email")} />
        {errors.email?.message}
        <label htmlFor="">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha..."
          {...register("password")}
        />
        {errors.password?.message}
        <label htmlFor="">Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio?.message}

        <label htmlFor="">Contato</label>
        <input
          type="number"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact?.message}

        <label htmlFor="">Selecionar módulos</label>
        <select name="" {...register("course_module")}>
          <option value="1">Primeiro módulo</option>
          <option value="2o Módulo (Frontend avançado)">
            2o Módulo (Frontend avançado)
          </option>
          <option value="3">Terceiro módulo</option>
        </select>
        <button type="submit" className="button-negative">
          Cadastrar
        </button>
      </form>
    </StyleRegister>
  );
}

export default Register;
