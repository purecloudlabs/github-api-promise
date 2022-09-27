export interface Config {
  owner: string;
  repo: string;
  token: string;
  host: string;
  debug: boolean;
}

let config: Config = {
  owner: "github_username",
  repo: "repo_name",
  token: "your_github_token",
  host: "https://api.github.com",
  debug: false,
};

export default config;
