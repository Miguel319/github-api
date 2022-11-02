import {
  GitHubBranch,
  GitHubCommit,
  GitHubRepository,
  GitHubUser,
} from "../models";

export interface HomeData {
  userInfo: GitHubUser;
  repositories: GitHubRepository[];
  branches: GitHubBranch[];
  commits: GitHubCommit[];
}
