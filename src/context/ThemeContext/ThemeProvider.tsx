import ThemeChanger from "@/components/ThemeChanger/ThemeChanger";
import { useState } from "react";
import { ThemeContext, ThemeType } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<ThemeType>(localTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
