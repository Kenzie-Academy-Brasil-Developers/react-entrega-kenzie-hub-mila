import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import { api } from "../components/services/api";

export const TechContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userState, setUserstate] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [loading]);

  async function createCard(data2) {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      console.log(data2);
      const response = await api.post("/users/techs", data2, {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider value={{ userState, loading, createCard }}>
      {children}
    </TechContext.Provider>
  );
};
