import config from "../config";
import { Endpoints } from "@octokit/types";
import req from "../request-helpers";
import { IssuesParams, GetRepositoryIssuesParams, IssuesBody } from "../types";

/**
 * @module issues/issues
 */
export default {
  /**
   * List issues
   * List all issues assigned to the authenticated user across all visible repositories including owned repositories, member repositories, and organization repositories
   *
   * @see {@link https://developer.github.com/v3/issues/#list-issues}
   *
   * @param {object} params           - An object of parameters for the request
   * @param {string} params.filter    - Indicates which sorts of issues to return. Can be one of: assigned, created, mentioned, subscribed, all. Default: assigned
   * @param {string} params.state     - Indicates the state of the issues to return. Can be either open, closed, or all. Default: open
   * @param {string} params.labels    - A list of comma separated label names. Example: bug,ui,@high
   * @param {string} params.sort      - What to sort results by. Can be either created, updated, comments. Default: created
   * @param {string} params.direction - The direction of the sort. Can be either asc or desc. Default: desc
   * @param {string} params.since     - Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   * @param {int}    params.page      - The page of results to retrieve
   *
   * @return {object} Issue data
   */
  getIssues: (params?: IssuesParams) => {
    return req.standardRequest(
      `${config.host}/issues?${req.assembleQueryParams(params, [
        "filter",
        "state",
        "labels",
        "sort",
        "direction",
        "since",
        "page",
      ])}`
    ) as Promise<Endpoints["GET /issues"]["response"]>;
  },

  /**
   * List issues
   * List all issues across owned and member repositories assigned to the authenticated user
   *
   * @see {@link https://developer.github.com/v3/issues/#list-issues}
   *
   * @param {object} params           - An object of parameters for the request
   * @param {string} params.filter    - Indicates which sorts of issues to return. Can be one of: assigned, created, mentioned, subscribed, all. Default: assigned
   * @param {string} params.state     - Indicates the state of the issues to return. Can be either open, closed, or all. Default: open
   * @param {string} params.labels    - A list of comma separated label names. Example: bug,ui,@high
   * @param {string} params.sort      - What to sort results by. Can be either created, updated, comments. Default: created
   * @param {string} params.direction - The direction of the sort. Can be either asc or desc. Default: desc
   * @param {string} params.since     - Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   * @param {int}    params.page      - The page of results to retrieve
   *
   * @return {object} Issue data
   */
  getUserIssues: (params?: IssuesParams) => {
    return req.standardRequest(
      `${config.host}/user/issues?${req.assembleQueryParams(params, [
        "filter",
        "state",
        "labels",
        "sort",
        "direction",
        "since",
        "page",
      ])}`
    ) as Promise<Endpoints["GET /user/issues"]["response"]>;
  },

  /**
   * List issues
   * List all issues for a given organization assigned to the authenticated user
   *
   * @see {@link https://developer.github.com/v3/issues/#list-issues}
   *
   * @param {string} org              - The organization
   * @param {object} params           - An object of parameters for the request
   * @param {string} params.filter    - Indicates which sorts of issues to return. Can be one of: assigned, created, mentioned, subscribed, all. Default: assigned
   * @param {string} params.state     - Indicates the state of the issues to return. Can be either open, closed, or all. Default: open
   * @param {string} params.labels    - A list of comma separated label names. Example: bug,ui,@high
   * @param {string} params.sort      - What to sort results by. Can be either created, updated, comments. Default: created
   * @param {string} params.direction - The direction of the sort. Can be either asc or desc. Default: desc
   * @param {string} params.since     - Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   * @param {int}    params.page      - The page of results to retrieve
   *
   * @return {object} Issue data
   */
  getOrganizationIssues: (org: string, params?: IssuesParams) => {
    return req.standardRequest(
      `${config.host}/orgs/${org}/issues?${req.assembleQueryParams(params, [
        "filter",
        "state",
        "labels",
        "sort",
        "direction",
        "since",
        "page",
      ])}`
    ) as Promise<Endpoints["GET /orgs/{org}/issues"]["response"]>;
  },

  /**
   * List issues for a repository
   *
   * @see {@link https://developer.github.com/v3/issues/#list-issues-for-a-repository}
   *
   * @param {string}         owner            - The repo's owner
   * @param {string}         repo             - The repo's name
   * @param {object}         params           - An object of parameters for the request
   * @param {string|integer} params.milestone - If an integer is passed, it should refer to a milestone by its number field. If the string * is passed, issues with any milestone are accepted. If the string none is passed, issues without milestones are returned.
   * @param {string}         params.state     - Indicates the state of the issues to return. Can be either open, closed, or all. Default: open
   * @param {string}         params.assignee  - Can be the name of a user. Pass in none for issues with no assigned user, and * for issues assigned to any user.
   * @param {string}         params.creator   - The user that created the issue.
   * @param {string}         params.mentioned - A user that's mentioned in the issue.
   * @param {string}         params.labels    - A list of comma separated label names. Example: bug,ui,@high
   * @param {string}         params.sort      - What to sort results by. Can be either created, updated, comments. Default: created
   * @param {string}         params.direction - The direction of the sort. Can be either asc or desc. Default: desc
   * @param {string}         params.since     - Only issues updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   * @param {int}            params.page      - The page of results to retrieve
   *
   * @return {object} Issue data
   */
  getRepositoryIssues: (
    owner: string,
    repo: string,
    params?: GetRepositoryIssuesParams
  ) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues?${req.assembleQueryParams(
        params,
        [
          "milestone",
          "state",
          "assignee",
          "creator",
          "mentioned",
          "labels",
          "sort",
          "direction",
          "since",
          "page",
        ]
      )}`
    ) as Promise<Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]>;
  },

  /**
   * Get a single issue
   *
   * @see {@link https://developer.github.com/v3/issues/#get-a-single-issue}
   *
   * @param {string} owner  - The repo's owner
   * @param {string} repo   - The repo's name
   * @param {string} number - The issue id
   *
   * @return {object} Issue data
   */
  getRepositoryIssue: (owner: string, repo: string, number: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/${number}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]
    >;
  },

  /**
   * Create an issue
   * Any user with pull access to a repository can create an issue.
   *
   * @see {@link https://developer.github.com/v3/issues/#create-an-issue}
   *
   * @param {string}   owner          - The repo's owner
   * @param {string}   repo           - The repo's name
   * @param {object}   body           - The request body
   * @param {string}   body.title     - Required. The title of the issue.
   * @param {string}   body.body      - The contents of the issue.
   * @param {string}   body.assignee  - Login for the user that this issue should be assigned to. NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. This field is deprecated.
   * @param {integer}  body.milestone - The number of the milestone to associate this issue with. NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise.
   * @param {string[]} body.labels    - Labels to associate with this issue. NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise.
   * @param {string[]} body.assignees - Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
   *
   * @return {object} Issue data
   */
  createIssue: (owner: string, repo: string, body: IssuesBody) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues`,
      "post",
      body
    ) as Promise<Endpoints["POST /repos/{owner}/{repo}/issues"]["response"]>;
  },

  /**
   * Edit an issue
   * Issue owners and users with push access can edit an issue.
   *
   * @see {@link https://developer.github.com/v3/issues/#edit-an-issue}
   *
   * @param {string}   owner          - The repo's owner
   * @param {string}   repo           - The repo's name
   * @param {string}   number         - The issue id
   * @param {object}   body           - The request body
   * @param {string}   body.title     - Required. The title of the issue.
   * @param {string}   body.body      - The contents of the issue.
   * @param {string}   body.assignee  - Login for the user that this issue should be assigned to. NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. This field is deprecated.
   * @param {string}   body.state     - State of the issue. Either open or closed.
   * @param {integer}  body.milestone - The number of the milestone to associate this issue with. NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise.
   * @param {string[]} body.labels    - Labels to associate with this issue. NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise.
   * @param {string[]} body.assignees - Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.
   *
   * @return {object} Issue data
   */
  updateIssue: function (
    owner: string,
    repo: string,
    number: string,
    body: IssuesBody
  ) {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/${number}`,
      "patch",
      body
    ) as Promise<
      Endpoints["PATCH /repos/{owner}/{repo}/issues/{issue_number}"]["response"]
    >;
  },

  /**
   * Lock an issue
   * Users with push access can lock an issue's conversation.
   *
   * @see {@link https://developer.github.com/v3/issues/#lock-an-issue}
   *
   * @param {string} owner  - The repo's owner
   * @param {string} repo   - The repo's name
   * @param {string} number - The issue id
   *
   * @return {null} 204 no content
   */
  lockIssue: function (owner: string, repo: string, number: string) {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/${number}/lock`,
      "put"
    ) as Promise<
      Endpoints["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"]["response"]
    >;
  },

  /**
   * Lock an issue
   * Users with push access can lock an issue's conversation.
   *
   * @see {@link https://developer.github.com/v3/issues/#lock-an-issue}
   *
   * @param {string} owner  - The repo's owner
   * @param {string} repo   - The repo's name
   * @param {string} number - The issue id
   *
   * @return {null} 204 no content
   */
  unlockIssue: function (owner: string, repo: string, number: string) {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/${number}/lock`,
      "delete"
    ) as Promise<
      Endpoints["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"]["response"]
    >;
  },
};
