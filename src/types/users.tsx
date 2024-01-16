export type LocalGithubUser = {
  login: string;

  private: boolean;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  avatar: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  bio: string;
  repos: number;
  repos_url: string;
  followers: number;
  following: number;
  twitter: string;
  created: string;
};

export type Request = {
  login: string;
  repos_url: string;
  avatar_url: string;
  name: string;
  private: boolean;
  company: string;
  blog: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  twitter_username: string;
  created_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
};

export type ErrorRequest = {
  message: string;
  documentation_url: string;
};
