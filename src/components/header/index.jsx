import React, { useContext } from "react";
import { StyleHeader } from "./style";
import Logo from "../../assets/img/logo-kenzie-hub.svg";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const { logout } = useContext(UserContext);

  return (
    <StyleHeader>
      <header className="header">
        <div className="div-header container">
          <img src={Logo} alt="" />
          <button
            className="button-dark"
            onClick={() => {
              logout();
            }}
          >
            Sair
          </button>
        </div>
      </header>
    </StyleHeader>
  );
};

export default Header;
