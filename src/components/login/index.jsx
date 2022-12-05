import React from "react";
import { StyleLogin } from "./style";
import Logo from "../../assets/img/logo-kenzie-hub.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export function Login() {
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
  return (
    <StyleLogin>
      <div className="head">
        <img src={Logo} alt="" />
      </div>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="title">
          <p>Login</p>
        </div>

        <label htmlFor="">E-mail</label>
        <input placeholder="Digite aqui seu email..." {...register("email")} />
        {errors.email?.message}
        <label htmlFor="">Senha</label>
        <input
          placeholder="Digite aqui sua senha..."
          {...register("password")}
        />
        {errors.password?.message}
        <button type="submit" className="button-pink">
          Entrar
        </button>
        <small>Ainda não possui uma conta? </small>
        <button className="button-grey">Cadastre-se</button>
      </form>
    </StyleLogin>
  );
}

export default Login;