import React from "react";
import { StyleHeader } from "./style";
import Logo from "../../assets/img/logo-kenzie-hub.svg";
import { useNavigate } from "react-router-dom";
/* import { Api } from "../../services/api";
import { toast, ToastContainer } from "react-toastify"; */
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <StyleHeader>
      <header className="header">
        <div className="div-header container">
          <img src={Logo} alt="" />
          <button className="button-dark" onClick={logout}>
            Sair
          </button>
        </div>
      </header>
    </StyleHeader>
  );
};

export default Header;
