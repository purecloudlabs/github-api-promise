export interface Config {
    owner: string;
    repo: string;
    token: string;
    host: string;
    debug: boolean;
}
declare let config: Config;
export default config;
