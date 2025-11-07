"use client";
import { ThemeContextType } from "@/types";
import { Theme } from "@radix-ui/themes";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const themeContext = createContext<ThemeContextType>({
  isDark: false,
  setIsDark: () => {},
});

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {

 const [isDark, setIsDark] = useState<boolean>(false);
 
 useEffect(() => {
    const stored = localStorage.getItem("Mode");
    if (stored === "true") setIsDark(true);
    else setIsDark(false);
  }, []);

   useEffect(() => {
    localStorage.setItem("Mode", String(isDark));
  }, [isDark]);

  return (
    <themeContext.Provider value={{ isDark, setIsDark }}>
      <Theme appearance={isDark ? "dark" : "light"} accentColor="teal">
        {children}
      </Theme>
    </themeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(themeContext);
}
