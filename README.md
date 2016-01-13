# github-api
A node module for interfacing with the Github API using promises. The full GitHub API documentation can be found at https://developer.github.com/v3/.

# Installation
```bash
npm install github-api
````

# Usage
TLDR;

1. Require _github-api_
2. Set settings
3. Make API calls

Basic example code:

```JavaScript
var api = require('github-api-promise');

// Set settings
api.config.owner = 'OwnersGithubUsername';
api.config.repo = 'RepoName';
api.config.token = 'YourAccessToken';
api.config.debug = true; // Default is false. Logs request information via console.log when true.

// Do stuff
api.repos.releases.getRepositoryReleases()
	.then(function(res) {
		// Do your stuff here. res is the JSON object returned by the API
	}, 
	function(err) {
		console.log('Request failed: ' + err);
	});
````

For help creating an access token, see the GitHub help article [Creating an Access Token for Command Line Use](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). This package only requires either the _repo_ scope for private repos or the _public_repo_ scope for public repos.

# API Support
The following APIs are supported. PRs welcome!

* [Repositories > Releases](https://developer.github.com/v3/repos/releases/) (all resources)

# Documentation
TODO: JSDoc on github pages

# Thanks
Special thanks to [jeejkang](https://github.com/jeejkang) for the [Stormtroopocat](https://octodex.github.com/stormtroopocat/) image!

Thanks to [aktau/github-release](https://github.com/aktau/github-release) (a library for GO) for the inspiration for this project.
