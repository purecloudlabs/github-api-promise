import config from "../config";
import { Endpoints } from "@octokit/types";
import { Params } from "../types";
import req from "../request-helpers";

export interface IssueEvent {
  getIssueEvents(
    owner: string,
    repo: string,
    issue_number: string,
    params?: Params
  ): Promise<
    Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/events"]["response"]
  >;

  getRepositoryIssueEvents(
    owner: string,
    repo: string,
    params?: Params
  ): Promise<Endpoints["GET /repos/{owner}/{repo}/issues/events"]["response"]>;

  getEvent(
    owner: string,
    repo: string,
    id: string
  ): Promise<
    Endpoints["GET /repos/{owner}/{repo}/issues/events/{event_id}"]["response"]
  >;
}

/**
 * @module issues/events
 */
export default {
  /**
   * List events for an issue
   *
   * @see {@link https://developer.github.com/v3/issues/events/#list-events-for-an-issue}
   *
   * @param {string} owner        - The repo's owner
   * @param {string} repo         - The repo's name
   * @param {string} issue_number - The issue id
   * @param {object} params       - An object of parameters for the request
   * @param {int}    params.page  - The page of results to retrieve
   *
   * @return {object} Event data
   */
  getIssueEvents: (
    owner: string,
    repo: string,
    issue_number: string,
    params?: Params
  ) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/issues/${issue_number}/events?${req.assembleQueryParams(
        params,
        ["page"]
      )}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}/events"]["response"]
    >;
  },

  /**
   * List events for a repository
   *
   * @see {@link https://developer.github.com/v3/issues/events/#list-events-for-a-repository}
   *
   * @param {string} owner        - The repo's owner
   * @param {string} repo         - The repo's name
   * @param {object} params       - An object of parameters for the request
   * @param {int}    params.page  - The page of results to retrieve
   *
   * @return {object} Event data
   */
  getRepositoryIssueEvents: (owner: string, repo: string, params: Params) => {
    return req.standardRequest(
      `${
        config.host
      }/repos/${owner}/${repo}/issues/events?${req.assembleQueryParams(params, [
        "page",
      ])}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/events"]["response"]
    >;
  },

  /**
   * Get a single event
   *
   * @see {@link https://developer.github.com/v3/issues/events/#}
   *
   * @param {string} owner - The repo's owner
   * @param {string} repo  - The repo's name
   * @param {string} id    - The issue id
   *
   * @return {object} Event data
   */
  getEvent: (owner: string, repo: string, id: string) => {
    return req.standardRequest(
      `${config.host}/repos/${owner}/${repo}/issues/events/${id}`
    ) as Promise<
      Endpoints["GET /repos/{owner}/{repo}/issues/events/{event_id}"]["response"]
    >;
  },
};
