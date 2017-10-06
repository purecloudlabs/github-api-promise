var githubApi = {};

// Submodules
githubApi.config = require('./config');
githubApi.repositories = {
	releases: require('./repositories/releases'),
};
githubApi.repos = githubApi.repositories; // for backwards compatibility
githubApi.activity = {
	events: require('./activity/events')
};

// Set to window object if there is a window
if(typeof window !== 'undefined') {
    window.githubApi = githubApi;
}

// Export
module.exports = githubApi;