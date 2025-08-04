//@ts-nocheck
"use client";
import getCurrUser from "@/helper";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const userContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/api/current-user");
      const data = await res.json();
      data.success && setUserData(data.data);
    }
    getData();
  }, []);

  return (
    <userContext.Provider value={{ userData }}>{children}</userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
