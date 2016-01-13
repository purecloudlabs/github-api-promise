var githubApi = {};

// Submodules
githubApi.config = require('./config');
githubApi.repos = require('./repositories/repositories');

// Set to window object if there is a window
if(typeof window !== 'undefined') {
    window.githubApi = githubApi;
}

// Export
module.exports = githubApi;