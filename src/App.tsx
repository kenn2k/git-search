import "./App.css";
import Header from "./components/Header/Header";
import Container from "./components/Container";
import SearchInput from "./components/Search/SearchInput";
import UserCard from "./components/DevBlock/UserCard";
import { defaultUser } from "./types/default";
import { useState } from "react";
import { ErrorRequest, LocalGithubUser } from "./types/users";
import { isGitHubUser } from "./types/guard";
import { mismatchLocalUser } from "./types/mismatch";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  //? При вводе имени пользователя, будем получать username
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const response = await fetch(url);
    const user = (await response.json()) as Request | ErrorRequest;
    if (isGitHubUser(user)) {
      setUser(mismatchLocalUser(user));
    } else {
      setUser(null);
    }
  };
  return (
    <>
      <Container>
        <Header />
        <SearchInput hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
      </Container>
    </>
  );
}

export default App;
