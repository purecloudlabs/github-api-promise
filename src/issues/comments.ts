import config from "../config";
import { Endpoints } from "@octokit/types";
import req from "../request-helpers";
import { Params, GetRepositoryCommentsParams, Body } from "../types";

/**
 * @module issues/comments
 */
export default {
  /**
   * List comments on an issue
   * Issue Comments are ordered by ascending ID.
   *
   * @see {@link https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue}
   *
   * @param {string} owner       - The repo's owner
   * @param {string} repo        - The repo's name
   * @param {string} number      - The issue id
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {object} Comment data
   */
  getIssueComments: (
    owner: string,
    repo: string,
    number: number,
    params?: Params
  ) => {
    return req.standardRequest(
      `${config.host
      }/repos/${owner}/${repo}/issues/${number}/comments?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"]["data"]
    >;
  },

  /**
   * List comments in a repository
   * By default, Issue Comments are ordered by ascending ID.
   *
   * @see {@link https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository}
   *
   * @param {string} owner            - The repo's owner
   * @param {string} repo             - The repo's name
   * @param {object} params           - An object of parameters for the request
   * @param {string}    params.sort      - Either created or updated. Default: created
   * @param {string}    params.direction - Either asc or desc. Ignored without the sort parameter.
   * @param {string}    params.since     - Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
   *
   * @return {object} Comment data
   */
  getRepositoryComments: (
    owner: string,
    repo: string,
    params?: GetRepositoryCommentsParams
  ) => {
    return req.standardRequest(
      `${config.host
      }/repos/${owner}/${repo}/issues/comments?${req.assembleQueryParams(
        params,
        ["sort", "direction", "since"]
      )}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/comments"]["response"]["data"]
    >;
  },

  /**
   * Get a single comment
   *
   * @see {@link https://developer.github.com/v3/issues/comments/#get-a-single-comment}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} id    - The comment id
   *
   * @return {object} Comment data
   */
  getComment: (owner: string, repo: string, id: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/comments/${id}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"]["data"]
    >;
  },

  /**
   * Create a comment
   *
   * @see {@link https://developer.github.com/v3/issues/comments/#create-a-comment}
   *
   * @param {string} owner     - The repo's owner
   * @param {string} repo      - The repo's name
   * @param {string} number    - The issue id
   * @param {object} body      - The request body
   * @param {string} body.body - The comment text
   *
   * @return {object} Comment data
   */
  createComment: (owner: string, repo: string, number: string, body: Body) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/${number}/comments`,
      "post",
      body
    ) as Promise<
      Endpoints["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"]["response"]["data"]
    >;
  },

  /**
   * Edit a comment
   *
   * @see {@link https://developer.github.com/v3/issues/comments/#edit-a-comment}
   *
   * @param {string} owner     - The repo's owner
   * @param {string} repo      - The repo's name
   * @param {string} id        - The comment id
   * @param {object} body      - The request body
   * @param {string} body.body - The comment text
   *
   * @return {object} Comment data
   */
  editComment: (owner: string, repo: string, id: string, body: Body) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/comments/${id}`,
      "patch",
      body
    ) as Promise<
      Endpoints["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"]["data"]
    >;
  },

  /**
   * Delete a comment
   *
   * @see {@link https://developer.github.com/v3/issues/comments/#delete-a-comment}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} id    - The comment id
   *
   * @return {null} 204 no content
   */
  deleteComment: (owner: string, repo: string, id: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/comments/${id}`,
      "delete"
    ) as Promise<
      Endpoints["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"]["response"]["data"]
    >;
  },
};
