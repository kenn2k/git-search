import SearchIcon from "@mui/icons-material/Search";
import { Button } from "./Button";

import styles from "./searchinput.module.css";
interface SearchProps {
  //* Если будет ошибка после нажатия на кнопку
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormField = {
  username: HTMLInputElement;
};

const SearchInput = ({ hasError, onSubmit }: SearchProps) => {
  const submitHandler = (
    event: React.FormEvent<HTMLFormElement & FormField>
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;
    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };
  return (
    <form onSubmit={submitHandler} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          className={styles.textField}
          type="text"
          placeholder="Search GitHub Users"
          id="search"
          name="username"
        />
        {hasError && <div className={styles.error}>no result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};

export default SearchInput;
