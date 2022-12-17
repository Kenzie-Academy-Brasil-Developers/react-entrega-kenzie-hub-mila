import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userState, setUserstate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [autoLogin, setAutoLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        setAutoLogin(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: { authorization: `Bearer ${token}` },
        });
        setUserstate(data);
        setAutoLogin(true);
        navigate("/home");
      } catch (error) {
        setAutoLogin(false);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [loading]);

  async function createAccount(data) {
    try {
      await api.post("/users", data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function login(data) {
    try {
      const response = await api.post("/sessions", data);

      const { token, user } = await response.data;
      setUserstate(user);
      localStorage.setItem("token", token);

      navigate("/home");
      setAutoLogin(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function createCard(data2) {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      await api.post("/users/techs", data2, {
        headers: { authorization: `Bearer ${token}` },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletCard(id) {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await api.delete(`/users/techs/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setAutoLogin(false);
  }

  return (
    <UserContext.Provider
      value={{
        userState,
        createAccount,
        login,
        loading,
        createCard,
        autoLogin,
        deletCard,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
