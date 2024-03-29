import config from "../config";
import req from "../request-helpers";
import { Endpoints } from "@octokit/types";
import { Params, RepoCollaboratorsParams } from "../types";

/**
 * Collaborators module
 * @module repositories/collaborators
 */
export default {
  /**
   * List collaborators
   *
   * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
   *
   * If you pass the hellcat-preview media type, team members will include the members of child teams.
   *
   * @see {@link https://developer.github.com/v3/repos/collaborators/#list-collaborators}
   *
   * @param {string} owner              - The repo's owner
   * @param {string} repo               - The repo's name
   * @param {object} params             - An object of parameters for the request
   * @param {string} params.affiliation - Filter collaborators returned by their affiliation. Can be one of: "outside": All outside collaborators of an organization-owned repository; "direct": All collaborators with permissions to an organization-owned repository, regardless of organization membership status; "all": All collaborators the authenticated user can see; "Default": all
   * @param {int}    params.page        - The page of results to retrieve
   *
   * @return {object} Collaborator data
   */
  getCollaborators: (
    owner: string,
    repo: string,
    params?: RepoCollaboratorsParams
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/collaborators?${req.assembleQueryParams(params, [
        "affiliation",
        "page",
      ])}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/collaborators"]["response"]["data"]
    >;
  },

  /**
   * Check if a user is a collaborator
   *
   * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
   *
   * If you pass the hellcat-preview media type, team members will include the members of child teams.
   *
   * Returns 204 if user is a collaborator, otherwise returns 404.
   *
   * @see {@link https://developer.github.com/v3/repos/collaborators/#check-if-a-user-is-a-collaborator}
   *
   * @param {string} owner    - The repo's owner
   * @param {string} repo     - The repo's name
   * @param {string} username - The username to check
   *
   * @return {null} Returns 204 if user is a collaborator, otherwise returns 404.
   */
  getUserIsCollaborator: (owner: string, repo: string, username: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/collaborators/${username}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}"]["response"]["data"]
    >;
  },

  /**
   * Review a user's permission level
   *
   * Possible values for the permission key: admin, write, read, none.
   *
   * @see {@link https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level}
   *
   * @param {string} owner    - The repo's owner
   * @param {string} repo     - The repo's name
   * @param {string} username - The username to check
   *
   * @return {object} Collaborator data
   */
  getUserPermissionLevel: (owner: string, repo: string, username: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/collaborators/${username}/permission`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/collaborators/{username}/permission"]["response"]["data"]
    >;
  },

  /**
   * Add user as a collaborator
   *
   * Note that, if you choose not to pass any parameters, you'll need to set Content-Length to zero when calling out to this endpoint. For more information, see "HTTP verbs."
   *
   * To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
   *
   * Returns 201 with data or 204
   *
   * @see {@link https://developer.github.com/v3/repos/collaborators/#add-user-as-a-collaborator}
   *
   * @param {string} owner             - The repo's owner
   * @param {string} repo              - The repo's name
   * @param {string} username          - The username to check
   * @param {object} params            - An object of parameters for the request
   * @param {int}    params.permission - The permission to grant the collaborator. Only valid on organization-owned repositories. Can be one of: "pull" - can pull, but not push to or administer this repository; "push" - can pull and push, but not administer this repository; "admin" - can pull, push and administer this repository
   *
   * @return {null} Returns 201 with data or 204
   */
  putUserCollaborator: (
    owner: string,
    repo: string,
    username: string,
    params?: Params
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/collaborators/${username}?${req.assembleQueryParams(
        params,
        ["permission"]
      )}`,
      "put"
    ) as Promise<
      Endpoints["PUT /repos/{owner}/{repo}/collaborators/{username}"]["response"]["data"]
    >;
  },

  /**
   * Remove user as a collaborator
   *
   * @see {@link https://developer.github.com/v3/repos/collaborators/#remove-user-as-a-collaborator}
   *
   * @param {string} owner              - The repo's owner
   * @param {string} repo               - The repo's name
   * @param {string} username          - The username to check
   *
   * @return {object} Collaborator data
   */
  deleteUserCollaborator: (owner: string, repo: string, username: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/collaborators/${username}`,
      "delete"
    ) as Promise<
      Endpoints["DELETE /repos/{owner}/{repo}/collaborators/{username}"]["response"]["data"]
    >;
  },
};
