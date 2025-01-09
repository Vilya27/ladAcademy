import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { useContext } from "react";

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
