import config from "../config";
import { Endpoints } from "@octokit/types";
import { Params } from "../types";
import req from "../request-helpers";

/**
 * @module activity/events
 */
export default {
  /**
   * List public events
   * @see {@link https://developer.github.com/v3/activity/events/#list-public-events}
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {object} Event data
   */
  getEvents: (params?: Params) => {
    return req.standardRequest(
      `${config.host}/events?${req.assembleQueryParams(params, ["page"])}`
    ) as Promise<Endpoints["GET /events"]["response"]["data"]>;
  },

  /**
   * List repository events
   * @see {@link https://developer.github.com/v3/activity/events/#list-repository-events}
   * @param {int}    owner       - The repo's owner id
   * @param {int}    repo        - The repo id
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {object} Event data
   */
  getRepositoryEvents: (owner: number, repo: number, params?: Params) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/events?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/events"]["response"]["data"]
    >;
  },

  /**
   * List issue events for a repository
   * Repository issue events have a different format than other events, as documented in the Issue Events API.
   * @see {@link https://developer.github.com/v3/activity/events/#list-issue-events-for-a-repository}
   * @param {int}    owner       - The repo's owner id
   * @param {int}    repo        - The repo id
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getRepositoryIssueEvents: (owner: number, repo: number, params?: Params) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/issues/events?${req.assembleQueryParams(params, [
        "page",
      ])}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/events"]["response"]["data"]
    >;
  },

  /**
   * List public events for a network of repositories
   * @see {@link https://developer.github.com/v3/activity/events/#list-public-events-for-a-network-of-repositories}
   * @param {int}    owner       - The repo's owner id
   * @param {int}    repo        - The repo id
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getNetworkRepositoryEvents: (
    owner: number,
    repo: number,
    params?: Params
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/networks/${owner}/${repo}/events?${req.assembleQueryParams(params, [
        "page",
      ])}`
    ) as Promise<
      Endpoints["GET /networks/{owner}/{repo}/events"]["response"]["data"]
    >;
  },

  /**
   * List public events for an organization
   * @see {@link https://developer.github.com/v3/activity/events/#list-public-events-for-an-organization}
   * @param {string} org         - The organization
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getOrganizationEvents: (org: string, params?: Params) => {
    return req.standardRequest(
      `${config.host}/orgs/${org}/events?${req.assembleQueryParams(params, [
        "page",
      ])}`
    ) as Promise<Endpoints["GET /orgs/{org}/events"]["response"]["data"]>;
  },

  /**
   * List events that a user has received
   * These are events that you've received by watching repos and following users. If you are authenticated as
   * the given user, you will see private events. Otherwise, you'll only see public events.
   * @see {@link https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received}
   * @param {string} username    - The username
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getUserEventsReceived: (username: string, params?: Params) => {
    return req.standardRequest(
      `${
        config.host
      }/users/${username}/received_events?${req.assembleQueryParams(params, [
        "page",
      ])}`
    ) as Promise<
      Endpoints["GET /users/{username}/received_events"]["response"]["data"]
    >;
  },

  /**
   * List public events that a user has received
   * @see {@link https://developer.github.com/v3/activity/events/#list-public-events-that-a-user-has-received}
   * @param {string} username    - The username
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getUserPublicEventsReceived: (username: string, params?: Params) => {
    return req.standardRequest(
      `${
        config.host
      }/users/${username}/received_events/public?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /users/{username}/events/public"]["response"]["data"]
    >;
  },

  /**
   * List events performed by a user
   * @see {@link https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user}
   * @param {string} username    - The username
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getUserEvents: (username: string, params?: Params) => {
    return req.standardRequest(
      `${config.host}/users/${username}/events?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<Endpoints["GET /users/{username}/events"]["response"]["data"]>;
  },

  /**
   * List public events performed by a user
   * @see {@link https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user}
   * @param {string} username    - The username
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getUserPublicEvents: (username: string, params?: Params) => {
    return req.standardRequest(
      `${config.host}/users/${username}/events/public?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /users/{username}/events/public"]["response"]["data"]
    >;
  },

  /**
   * List events for an organization
   * This is the user's organization dashboard. You must be authenticated as the user to view this.
   * @see {@link https://developer.github.com/v3/activity/events/#list-events-for-an-organization}
   * @param {string} username    - The username
   * @param {string} org         - The organization
   * @param {object} params      - An object of parameters for the request
   * @param {int}    params.page - The page of results to retrieve
   *
   * @return {JSON} Event data
   */
  getUserOrganizationEvents: (
    username: string,
    org: string,
    params?: Params
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/users/${username}/events/orgs/${org}?${req.assembleQueryParams(params, [
        "page",
      ])}`
    ) as Promise<
      Endpoints["GET /users/{username}/events/orgs/{org}"]["response"]["data"]
    >;
  },
};
