import { Params } from "../types";
import { Endpoints } from "@octokit/types";
import config from "../config";
import req from "../request-helpers";

/**
 * Commits module
 * @module repositories/commits
 */
export default {
  /**
   * List commits on a repository
   *
   * @see {@link https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository}
   *
   * @param {string} owner         - The repo's owner
   * @param {string} repo          - The repo's name
   * @param {object} params        - An object of parameters for the request
   * @param {string} params.sha    - SHA or branch to start listing commits from. Default: the repository’s default branch (usually master).
   * @param {string} params.path   - Only commits containing this file path will be returned.
   * @param {string} params.author - GitHub login or email address by which to filter by commit author.
   * @param {string} params.since  - Only commits after this date will be returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   * @param {string} params.until  - Only commits before this date will be returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   * @param {int}    params.page   - The page of results to retrieve
   *
   * @return {object} Commit data
   */
  getCommits: (owner: string, repo: string, params?: Params) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/commits?${req.assembleQueryParams(
        params,
        ["sha", "path", "author", "since", "until", "page"]
      )}`
    ) as Promise<Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]>;
  },

  /**
   * Get a single commit
   *
   * @see {@link https://developer.github.com/v3/repos/commits/#get-a-single-commit}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} sha   - The commit's sha
   *
   * @return {object} Commit data
   */
  getCommit: (owner: string, repo: string, sha: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/commits/${sha}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/commits/{ref}"]["response"]
    >;
  },

  /**
   * ***NOT IMPLEMENTED***
   * Get the SHA-1 of a commit reference
   * Users with read access can get the SHA-1 of a commit reference
   *
   * @see {@link https://developer.github.com/v3/repos/commits/#get-the-sha-1-of-a-commit-reference}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} ref   - The commit's reference
   *
   * @return {string} SHA-1 value
   */
  getSha1: function (owner: string, repo: string, ref: string) {
    throw new Error("Operation not implemented");

    /* To access the API you must provide a custom media type in the Accept header:
     * application/vnd.github.VERSION.sha
     */

    //TODO: ability to pass custom headers to the request
    //return req.standardRequest(`${config.host}/repos/${owner}/${repo}/commits/${ref}`);
  },

  /**
   * Compare two commits
   * Both :base and :head must be branch names in :repo. To compare branches across other repositories in the same network as :repo, use the format <USERNAME>:branch. For example: base=hubot:branchname, head=octocat:branchname
   *
   * @see {@link https://developer.github.com/v3/repos/commits/#compare-two-commits}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} base  - The branch to be used as the basis for comparison
   * @param {string} head  - The branch to compare against :base
   *
   * @return {object} comparison data
   */
  compareCommits: function (
    owner: string,
    repo: string,
    base: string,
    head: string
  ) {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/compare/${base}...${head}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/compare/{base}...{head}"]["response"]
    >;
  },

  /**
   * Commit signature verification
   *
   * @see {@link https://developer.github.com/v3/repos/commits/#commit-signature-verification}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} sha   - The commit's sha
   *
   * @return {object} Commit data
   */
  verifySignature: function (owner: string, repo: string, sha: string) {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/commits/${sha}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"]["response"]
    >;
  },
};
