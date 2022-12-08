import React from "react";
import { StyleRegister } from "./style";
import Logo from "../../assets/img/logo-kenzie-hub.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
    passwordConfirm: yup.string().required("Senha obrigatória"),
    bio: yup.string().required("Preencha o campo"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => console.log(data); //enviar p api - manipular os dados da forma que precisar;

  console.log(errors);

  const registerButton = (event) => {
    event.preventDefault();
    navigate("/login");
  };
  return (
    <StyleRegister>
      <div className="head">
        <img src={Logo} alt="" />
        <button className="button-dark">Voltar</button>
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
          placeholder="Digite aqui sua senha..."
          {...register("password")}
        />
        {errors.password?.message}
        <label htmlFor="">Confirmar senha</label>
        <input
          placeholder="Confirme aqui sua senha..."
          {...register("passwordConfirm")}
        />
        {errors.passwordConfirm?.message}
        <label htmlFor="">Bio</label>
        <input placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio?.message}
        <label htmlFor="">Selecionar módulos</label>
        <select name="" id="">
          <option value="">Primeiro módulo</option>
        </select>
        <button
          type="submit"
          className="button-negative"
          onClick={registerButton}
        >
          Cadastrar
        </button>
      </form>
    </StyleRegister>
  );
}

export default Register;
