import ThemeSwitch from "../Theme/ThemeSwitch";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <p>Finder</p>
      <ThemeSwitch />
    </div>
  );
};

export default Header;
