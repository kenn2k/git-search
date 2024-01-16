import { LocalGithubUser } from "../../types/users";
import Repos from "./Repos";
import UserContact from "./UserContact";
import UserStat from "./UserStat";
import UserTitle from "./UserTitle";
import styles from "./usercard.module.css";
interface Card extends LocalGithubUser {}

const UserCard = (props: Card) => {
  return (
    <div className={styles.userCard}>
      <img src={props.avatar} alt={props.login} className={styles.avatar} />
      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />
      <p className={`${styles.bio}${props.bio ? "" : ` ${styles.empty}`}`}>
        {props.bio || "No bio :("}
      </p>
      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />
      <UserContact
        location={props.location}
        blog={props.blog}
        twitter={props.twitter}
        company={props.company}
      />
      <Repos reposURL={props.repos_url} />
    </div>
  );
};

export default UserCard;
