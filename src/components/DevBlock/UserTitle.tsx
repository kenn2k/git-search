import styles from "./usertitle.module.css";
import { LocalGithubUser } from "../../types/users";
interface UserTitle
  extends Pick<LocalGithubUser, "login" | "name" | "created"> {}
const userdata = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const UserTitle = ({ created, name, login }: UserTitle) => {
  const receivedDate = userdata.format(new Date(created));
  return (
    <div className={styles.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{receivedDate}</span>
    </div>
  );
};

export default UserTitle;
