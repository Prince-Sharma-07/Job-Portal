"use client";
import { UserWithCompany, UserWithCompanyWithReviewsWithApplications } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const userContext = createContext<{
  userData?: UserWithCompanyWithReviewsWithApplications;
  setUserData?: (value: UserWithCompanyWithReviewsWithApplications) => void;
}>({});

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [userData, setUserData] = useState<UserWithCompanyWithReviewsWithApplications>();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/current-user`
      );
      const data = await res.json();
      data.success && setUserData(data.data);
    }
    getData();
  }, []);

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
