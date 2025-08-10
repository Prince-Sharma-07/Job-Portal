"use client";
import { ThemeContextType } from "@/types";
import { Theme } from "@radix-ui/themes";
import { createContext, ReactNode, useContext, useState } from "react";

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
