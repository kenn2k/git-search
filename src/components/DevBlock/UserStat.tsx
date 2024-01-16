import styles from "./userstat.module.css";
import { LocalGithubUser } from "../../types/users";

export interface UserStats
  extends Pick<LocalGithubUser, "repos" | "following" | "followers"> {}
const UserStat = ({ repos, followers, following }: UserStats) => {
  return (
    <div className={styles.userStat}>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Repos</div>
        <div className={styles.infoNumber}>{repos}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Following</div>
        <div className={styles.infoNumber}>{following}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>Followers</div>
        <div className={styles.infoNumber}>{followers}</div>
      </div>
    </div>
  );
};

export default UserStat;
