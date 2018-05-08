const req = require('./request-helpers');

var githubApi = {};

// Submodules
githubApi.config = require('./config');

githubApi.activity = {
	events: require('./activity/events')
};

githubApi.issues = {
	comments: require('./issues/comments'),
	events: require('./issues/events'),
	issues: require('./issues/issues')
};

githubApi.pullRequests = {
	comments: require('./pull-requests/comments'),
	pullRequests: require('./pull-requests/pull-requests')
};

githubApi.repositories = {
	collaborators: require('./repositories/collaborators'),
	commits: require('./repositories/commits'),
	releases: require('./repositories/releases'),
	repositories: require('./repositories/repositories')
};
githubApi.repos = githubApi.repositories; // alias for backwards compatibility

githubApi.teams = {
	teams: require('./teams/teams')
};

githubApi.getRequestCount = () => { return req.requestCount; };

// Set to window object if there is a window
if(typeof window !== 'undefined') {
	window.githubApi = githubApi;
}

// Export
module.exports = githubApi;