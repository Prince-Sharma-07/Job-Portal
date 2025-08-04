//@ts-nocheck
'use client'
import { Theme } from "@radix-ui/themes";
import { createContext, ReactNode, useContext, useState } from "react";

const themeContext = createContext(null);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {

 const [isDark , setIsDark] = useState(false);

  return (
    <themeContext.Provider value={{isDark , setIsDark}}>
      <Theme appearance={isDark ? "dark" : "light"}>{children}</Theme>
    </themeContext.Provider>
  );
}


export function useThemeContext(){
    return useContext(themeContext)
}