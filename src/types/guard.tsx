import { Request } from "./users";

export const isGitHubUser = (user: any): user is Request => "id" in user;
