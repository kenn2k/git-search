// Repos.tsx
import { useState, useEffect } from "react";
import styles from "./repos.module.css";
import { LocalGithubUser } from "../../types/users";

interface Repo extends LocalGithubUser {
  id: string;
  avatar_url: string;
}

interface ReposProps {
  reposURL: string;
}

const Repos = ({ reposURL }: ReposProps) => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(reposURL);
        const data = await response.json();

        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, [reposURL]);

  return (
    <div className={styles.info}>
      <div className={styles.infoTitle}>Repositories</div>
      <div className={styles.repoList}>
        {repos.slice(0, 8).map((repo) => (
          <div key={repo.id} className={styles.repoItem}>
            <a
              href={repo.owner.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repos;
