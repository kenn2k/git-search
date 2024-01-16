import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import styles from "./theme.module.css";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? "Dark" : "Light";

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{theme}</span>
      {isDark ? <DarkModeIcon /> : <LightModeIcon />}
    </div>
  );
};

export default ThemeSwitch;
