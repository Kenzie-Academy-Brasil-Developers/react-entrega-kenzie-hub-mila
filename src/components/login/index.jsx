import React from "react";
import { useContext } from "react";
import { StyleLogin } from "./style";
import Logo from "../../assets/img/logo-kenzie-hub.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
/* import { Api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify"; */
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/userContext";

export function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("Nome obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => login(data); //enviar p api - manipular os dados da forma que precisar;

  /* const loginButton = (event) => {
    event.preventDefault();
    navigate("/home");
  }; */

  /* const backToRegister = (event) => {
    event.preventDefault();
    navigate("/");
  }; */

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
        <button
          type="submit"
          className="button-pink" /* onClick={loginButton} */
        >
          Entrar
        </button>
        <small>Ainda não possui uma conta?? </small>
        <button className="button-grey" /* onClick={backToRegister} */>
          Cadastre-se
        </button>
      </form>
    </StyleLogin>
  );
}

export default Login;
