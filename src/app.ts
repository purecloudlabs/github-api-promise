import req from "./request-helpers";
import config from "./config";
import activityEvents from "./activity/events";
import issuesComments from "./issues/comments";
import issuesEvents from "./issues/events";
import issues from "./issues/issues";
import prComments from "./pull-requests/comments";
import pr from "./pull-requests/pull-requests";
import collaborators from "./repositories/collaborators";
import commits from "./repositories/commits";
import contents from "./repositories/contents";
import releases from "./repositories/releases";
import repositories from "./repositories/repositories";
import teams from "./teams/teams";

declare global {
  interface Window {
    githubApi: any;
  }
}

let githubApi = {
  config: config,

  activity: {
    events: activityEvents,
  },
  issues: {
    comments: issuesComments,
    events: issuesEvents,
    issues: issues,
  },
  pullRequests: {
    comments: prComments,
    pullRequests: pr,
  },
  repositories: {
    collaborators: collaborators,
    commits: commits,
    contents: contents,
    releases: releases,
    repositories: repositories,
  },
  // alias for backwards compatibility
  repos: {
    collaborators: collaborators,
    commits: commits,
    contents: contents,
    releases: releases,
    repositories: repositories,
  },
  teams: {
    teams: teams,
  },
  getRequestCount: () => {
    return req.requestCount;
  },
};

// Set to window object if there is a window
if (typeof window !== "undefined") {
  window.githubApi = githubApi;
}

// Export
export default githubApi;
