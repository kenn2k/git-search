import { Request, LocalGithubUser } from "./users";

export const mismatchLocalUser = (user: Request): LocalGithubUser => ({
  login: user.login,
  avatar: user.avatar_url,
  name: user.name,
  company: user.company,
  blog: user.blog,
  location: user.location,
  bio: user.bio,
  repos: user.public_repos,
  followers: user.followers,
  following: user.following,
  twitter: user.twitter_username,
  created: user.created_at,
  repos_url: user.repos_url,
});
