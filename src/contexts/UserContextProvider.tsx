"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Company, User } from "../../generated/prisma";

type UwC = User  & {company : Company | null}

const userContext = createContext<{
  userData? : UwC | null,
  setUserData? : (value : UwC)=>void
}>({ });

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userData, setUserData] = useState<UwC | null>(null);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:3000/api/current-user");
      const data = await res.json();
      data.success && setUserData(data.data);
    }
    getData();
  }, []);

  return (
    <userContext.Provider value={{ userData , setUserData }}>{children}</userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
