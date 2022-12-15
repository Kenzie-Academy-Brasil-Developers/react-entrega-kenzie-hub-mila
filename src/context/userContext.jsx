import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../components/services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userState, setUserstate] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: { authorization: `Bearer ${token}` },
        });
        setUserstate(data);
      } catch (error) {
        console.error("error");
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function createAccount(data) {
    try {
      console.log(data);
      const response = await api.post("/users", data);
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function login(data) {
    try {
      console.log(data);
      const response = await api.post("/sessions", data);

      const { token, user } = await response.data;
      setUserstate(user);
      localStorage.setItem("token", token);

      console.log(response);
      console.log(token);
      console.log(userState);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider value={{ userState, createAccount, login, loading }}>
      {children}
    </UserContext.Provider>
  );
};
