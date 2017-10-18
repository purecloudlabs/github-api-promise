# github-api-promise

A node module for interfacing with the Github API using promises. The full GitHub API documentation can be found at https://developer.github.com/v3/.


# Installation

```bash
npm install github-api-promise
```


# Documentation

https://princenebulon.github.io/github-api-promise/


# Usage

TLDR;

1. Require _github-api-promise_
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
	})
	.catch(function(err) {
		console.log('Request failed: ' + err);
	});
```

For help creating an access token, see the GitHub help article [Creating an Access Token for Command Line Use](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). This package only requires either the _repo_ scope for private repos or the _public_repo_ scope for public repos.


# API Support

The following APIs are supported. PRs welcome!

* Activity
	* [Events](https://developer.github.com/v3/activity/events/)
* Issues
	* [Comments](https://developer.github.com/v3/issues/comments/)
	* [Events](https://developer.github.com/v3/issues/events/)
	* [Issues](https://developer.github.com/v3/issues/)
* Pull Requests
	* [Comments](https://developer.github.com/v3/pulls/comments/)
	* [Pull Requests](https://developer.github.com/v3/pulls/)
* Repositories
	* [Commits](https://developer.github.com/v3/repos/commits/)
	* [Releases](https://developer.github.com/v3/repos/releases/)
	* [Repositories](https://developer.github.com/v3/repos/)


# Thanks

Special thanks to [jeejkang](https://github.com/jeejkang) for the [Stormtroopocat](https://octodex.github.com/stormtroopocat/) image!

Thanks to [aktau/github-release](https://github.com/aktau/github-release) (a library for GO) for the inspiration for this project.
