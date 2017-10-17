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
	pullRequests: require('./pull-requests/pull-requests')
};

githubApi.repositories = {
	releases: require('./repositories/releases'),
	repositories: require('./repositories/repositories')
};
githubApi.repos = githubApi.repositories; // alias for backwards compatibility

// Set to window object if there is a window
if(typeof window !== 'undefined') {
	window.githubApi = githubApi;
}

// Export
module.exports = githubApi;