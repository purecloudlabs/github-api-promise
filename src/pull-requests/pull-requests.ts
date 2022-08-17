import config from "../config";
import req from "../request-helpers";
import { Params, PullRequestBody, PullRequestParams } from "../types";
import { Endpoints } from "@octokit/types";

/**
 * Pull Requests module
 * @module pullRequests/pullRequests
 */
export default {
  /**
   * List pull requests
   *
   * @see {@link https://developer.github.com/v3/pulls#list-pull-requests}
   *
   * @param {string} owner            - The repo's owner
   * @param {string} repo             - The repo's name
   * @param {object} params           - An object of parameters for the request
   * @param {string} params.state     - Either open, closed, or all to filter by state. Default: open
   * @param {string} params.head      - Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
   * @param {string} params.base      - Filter pulls by base branch name. Example: gh-pages.
   * @param {string} params.sort      - What to sort results by. Can be either created, updated, popularity (comment count) or long-running (age, filtering by pulls updated in the last month). Default: created
   * @param {string} params.direction - The direction of the sort. Can be either asc or desc. Default: desc when sort is created or sort is not specified, otherwise asc.
   * @param {int}    params.page      - The page of results to retrieve
   *
   * @return {object} Pull request data
   */
  getPullRequests: (
    owner: string,
    repo: string,
    params?: PullRequestParams
  ) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/pulls?${req.assembleQueryParams(
        params,
        ["state", "head", "base", "sort", "direction", "page"]
      )}`
    ) as Promise<Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"]>;
  },

  /**
   * Get a single pull request
   *
   * @see {@link https://developer.github.com/v3/pulls#get-a-single-pull-request}
   *
   * @param {string} owner  - The repo's owner
   * @param {string} repo   - The repo's name
   * @param {string} number - The pull request number
   *
   * @return {object} Pull request data
   */
  getPullRequest: (owner: string, repo: string, number: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/pulls/${number}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}"]["response"]
    >;
  },

  /**
   * Create a pull request
   *
   * @see {@link https://developer.github.com/v3/pulls#create-a-pull-request}
   *
   * @param {string}  owner                      - The repo's owner
   * @param {string}  repo                       - The repo's name
   * @param {object}  body                       - The request body
   * @param {string}  body.title                 - Required. The title of the pull request.
   * @param {string}  body.head                  - Required. The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
   * @param {string}  body.base                  - Required. The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
   * @param {string}  body.body                  - The contents of the pull request.
   * @param {boolean} body.maintainer_can_modify - Indicates whether maintainers can modify the pull request.
   *
   * @return {object} Pull request data
   */
  createPullRequest: (owner: string, repo: string, body: PullRequestBody) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/pulls`,
      "post",
      body
    ) as Promise<Endpoints["POST /repos/{owner}/{repo}/pulls"]["response"]>;
  },

  /**
   * Update a pull request
   *
   * @see {@link https://developer.github.com/v3/pulls#update-a-pull-request}
   *
   * @param {string}  owner                      - The repo's owner
   * @param {string}  repo                       - The repo's name
   * @param {string}  number                     - The pull request number
   * @param {object}  body                       - The request body
   * @param {string}  body.title                 - Required. The title of the pull request.
   * @param {string}  body.head                  - Required. The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
   * @param {string}  body.base                  - Required. The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
   * @param {string}  body.body                  - The contents of the pull request.
   * @param {boolean} body.maintainer_can_modify - Indicates whether maintainers can modify the pull request.
   *
   * @return {object} Pull request data
   */
  updatePullRequest: (
    owner: string,
    repo: string,
    number: string,
    body: PullRequestBody
  ) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/pulls/${number}`,
      "patch",
      body
    ) as Promise<
      Endpoints["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"]["response"]
    >;
  },

  /**
   * List commits on a pull request
   *
   * @see {@link https://developer.github.com/v3/pulls#list-commits-on-a-pull-request}
   *
   * @param {string} owner       - The repo's owner
   * @param {string} repo        - The repo's name
   * @param {string} number      - The pull request number
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {object} Pull request data
   */
  getPullRequestCommits: (
    owner: string,
    repo: string,
    number: string,
    params?: Params
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/pulls/${number}/commits?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"]["response"]
    >;
  },

  /**
   * List pull requests files
   *
   * @see {@link https://developer.github.com/v3/pulls#list-pull-requests-files}
   *
   * @param {string} owner       - The repo's owner
   * @param {string} repo        - The repo's name
   * @param {string} number      - The pull request number
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {object} Pull request data
   */
  getPullRequestFiles: (
    owner: string,
    repo: string,
    number: string,
    params?: Params
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/pulls/${number}/files?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"]["response"]
    >;
  },

  /**
   * Get if a pull request has been merged. 204=merged, 404=not merged
   *
   * @see {@link https://developer.github.com/v3/pulls#get-if-a-pull-request-has-been-merged}
   *
   * @param {string} owner  - The repo's owner
   * @param {string} repo   - The repo's name
   * @param {string} number - The pull request number
   *
   * @return {null} 204=merged / 404=not merged
   */
  getIsMerged: (owner: string, repo: string, number: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/pulls/${number}/merge`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["response"]
    >;
  },

  /**
   * Merge a pull request (Merge Button)
   *
   * @see {@link https://developer.github.com/v3/pulls#merge-a-pull-request-merge-button}
   *
   * @param {string} owner                 - The repo's owner
   * @param {string} repo                  - The repo's name
   * @param {object} params                - An object of parameters for the request
   * @param {string} params.commit_title   - Title for the automatic commit message.
   * @param {string} params.commit_message - Extra detail to append to automatic commit message.
   * @param {string} params.sha            - SHA that pull request head must match to allow merge.
   * @param {string} params.merge_method   - Merge method to use. Possible values are merge, squash or rebase. Default is merge.
   * @param {int}    params.page           - The page of results to retrieve
   *
   * @return {object} Pull request data
   */
  merge: (owner: string, repo: string, number: string, params?: Params) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/pulls/${number}/merge?${req.assembleQueryParams(
        params,
        ["commit_message", "sha", "merge_method", "page"]
      )}`,
      "PUT"
    ) as Promise<
      Endpoints["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"]["response"]
    >;
  },
};
