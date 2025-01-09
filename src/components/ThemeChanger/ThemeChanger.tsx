import { ThemeContext, ThemeType } from "@/context/ThemeContext/ThemeContext";
import { useThemeContext } from "@/hooks/useThemeContext";
import Switch from "@mui/material/Switch";

const ThemeChanger = () => {
  const { theme, setTheme } = useThemeContext();
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme((e.target.checked ? "dark" : "light") as ThemeType);
    localStorage.setItem("theme", e.target.checked ? "dark" : "light");
  };
  return (
    <>
      <Switch
        inputProps={{ "aria-label": "Switch demo" }}
        checked={theme == "light" ? false : true}
        onChange={handleThemeChange}
      />
    </>
  );
};
export default ThemeChanger;
