import styles from "./button.module.css";

interface ButtonProps {
  //! Нам не нужно, чтобы в кнопку передавалось что-то помимо строки
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
