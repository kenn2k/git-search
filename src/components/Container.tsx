import { ReactNode } from "react";
import styles from "./container.module.css";
interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
