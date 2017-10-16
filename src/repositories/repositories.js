const config = require('../config');
const req = require('../request-helpers');



module.exports = {
	/**
	 * List your repositories
	 * List repositories that are accessible to the authenticated user.
	 * This includes repositories owned by the authenticated user, repositories where the authenticated user 
	 * is a collaborator, and repositories that the authenticated user has access to through an organization 
	 * membership.
	 * @see {@link https://developer.github.com/v3/repos/#list-your-repositories}
	 * @param {object} params             - An object of parameters for the request
	 * @param {string} params.visibility  - Can be one of all, public, or private. Default: all
	 * @param {string} params.affiliation - default: owner, collaborator, organization_member
	 * @param {string} params.type        - Can be one of all, owner, public, private, member. Default: all. Will cause a 422 error if used in the same request as visibility or affiliation.
	 * @param {string} params.sort        - Can be one of created, updated, pushed, full_name. Default: full_name
	 * @param {string} params.direction   - Can be one of asc or desc. Default: when using full_name: asc; otherwise desc
	 * @param {int}    params.page        - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getMyRepos: function(params) {
		return req.standardRequest(`${config.host}/user/repos?${req.assembleQueryParams(params,
			['visibility','affiliation','type','sort','direction','page'])}`);
	},
	
	/**
	 * List user repositories
	 * List public repositories for the specified user.
	 * @see {@link https://developer.github.com/v3/repos/#list-user-repositories}
	 * @param {string} username         - The specified user
	 * @param {object} params           - An object of parameters for the request
	 * @param {string} params.type      - Can be one of all, owner, member. Default: owner
	 * @param {string} params.sort      - Can be one of created, updated, pushed, full_name. Default: full_name
	 * @param {string} params.direction - Can be one of asc or desc. Default: when using full_name: asc; otherwise desc
	 * @param {int}    params.page      - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getUserRepos: function(username, params) {
		return req.standardRequest(`${config.host}/users/${username}/repos?${req.assembleQueryParams(params,
			['type','sort','direction','page'])}`);
	},
	
	/**
	 * List organization repositories
	 * List repositories for the specified org.
	 * @see {@link https://developer.github.com/v3/repos/#list-organization-repositories}
	 * @param {string} org         - The specified org
	 * @param {object} params      - An object of parameters for the request
	 * @param {string} params.type - Can be one of all, public, private, forks, sources, member. Default: all
	 * @param {int}    params.page - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getOrgRepos: function(org, params) {
		return req.standardRequest(`${config.host}/orgs/${org}/repos?${req.assembleQueryParams(params,
			['type','page'])}`);
	},
	
	/**
	 * List all public repositories
	 * This provides a dump of every public repository, in the order that they were created.
	 * Note: Pagination is powered exclusively by the since parameter. Use the Link header to get the URL for the next page of repositories.
	 * @see {@link https://developer.github.com/v3/repos/#list-all-public-repositories}
	 * @param {object} params       - An object of parameters for the request
	 * @param {string} params.since - The integer ID of the last Repository that you've seen.
	 *
	 * @return {JSON} repo data
	 */
	getPublicRepositories: function(params) {
		return req.standardRequest(`${config.host}/repositories?${req.assembleQueryParams(params,
			['since'])}`);
	},
	
	/**
	 * Create
	 * Create a new repository for the authenticated user.
	 * @see {@link https://developer.github.com/v3/repos/#create}
	 * @param {object}  body                    - The request body
	 * @param {string}  body.name               - Required. The name of the repository.
	 * @param {string}  body.description        - A short description of the repository.
	 * @param {string}  body.homepage           - A URL with more information about the repository.
	 * @param {boolean} body.private            - Either true to create a private repository or false to create a public one. Creating private repositories requires a paid GitHub account. Default: false.
	 * @param {boolean} body.has_issues         - Either true to enable issues for this repository or false to disable them. Default: true.
	 * @param {boolean} body.has_projects       - Either true to enable projects for this repository or false to disable them. Default: true. Note: If you're creating a repository in an organization that has disabled repository projects, the default is false, and if you pass true, the API returns an error.
	 * @param {boolean} body.has_wiki           - Either true to enable the wiki for this repository or false to disable it. Default: true.
	 * @param {integer} body.team_id            - The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
	 * @param {boolean} body.auto_init          - Pass true to create an initial commit with empty README. Default: false.
	 * @param {string}  body.gitignore_template - Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell".
	 * @param {string}  body.license_template   - Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
	 * @param {boolean} body.allow_squash_merge - Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true
	 * @param {boolean} body.allow_merge_commit - Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true
	 * @param {boolean} body.allow_rebase_merge - Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true
	 *
	 * @return {JSON} repo data
	 */
	createUserRepository: function(body) {
		return req.standardRequest(`${config.host}/user/repos`, 'post', body);
	},
	
	/**
	 * Create
	 * Create a new repository in this organization. The authenticated user must be a member of the specified organization.
	 * @see {@link https://developer.github.com/v3/repos/#create}
	 * @param {string}  org                     - The organization in which to create the repository
	 * @param {object}  body                    - The request body
	 * @param {string}  body.name               - Required. The name of the repository.
	 * @param {string}  body.description        - A short description of the repository.
	 * @param {string}  body.homepage           - A URL with more information about the repository.
	 * @param {boolean} body.private            - Either true to create a private repository or false to create a public one. Creating private repositories requires a paid GitHub account. Default: false.
	 * @param {boolean} body.has_issues         - Either true to enable issues for this repository or false to disable them. Default: true.
	 * @param {boolean} body.has_projects       - Either true to enable projects for this repository or false to disable them. Default: true. Note: If you're creating a repository in an organization that has disabled repository projects, the default is false, and if you pass true, the API returns an error.
	 * @param {boolean} body.has_wiki           - Either true to enable the wiki for this repository or false to disable it. Default: true.
	 * @param {integer} body.team_id            - The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
	 * @param {boolean} body.auto_init          - Pass true to create an initial commit with empty README. Default: false.
	 * @param {string}  body.gitignore_template - Desired language or platform .gitignore template to apply. Use the name of the template without the extension. For example, "Haskell".
	 * @param {string}  body.license_template   - Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
	 * @param {boolean} body.allow_squash_merge - Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true
	 * @param {boolean} body.allow_merge_commit - Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true
	 * @param {boolean} body.allow_rebase_merge - Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true
	 *
	 * @return {JSON} repo data
	 */
	createOrgRepository: function(org, body) {
		return req.standardRequest(`${config.host}/orgs/${org}/repos`, 'post', body);
	},
	
	/**
	 * Get
	 * @see {@link https://developer.github.com/v3/repos/#get}
	 * @param {int} owner - The repo's owner id
	 * @param {int} repo  - The repo id
	 *
	 * @return {JSON} repo data
	 */
	getRepository: function(owner, repo) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}`);
	},
	
	/**
	 * Edit
	 * @see {@link https://developer.github.com/v3/repos/#edit}
	 * @param {int}     owner                   - The repo's owner id
	 * @param {int}     repo                    - The repo id
	 * @param {object}  body                    - The request body
	 * @param {string}  body.name               - Required. The name of the repository.
	 * @param {string}  body.description        - A short description of the repository.
	 * @param {string}  body.homepage           - A URL with more information about the repository.
	 * @param {boolean} body.private            - Either true to create a private repository or false to create a public one. Creating private repositories requires a paid GitHub account. Default: false.
	 * @param {boolean} body.has_issues         - Either true to enable issues for this repository or false to disable them. Default: true.
	 * @param {boolean} body.has_projects       - Either true to enable projects for this repository or false to disable them. Default: true. Note: If you're creating a repository in an organization that has disabled repository projects, the default is false, and if you pass true, the API returns an error.
	 * @param {boolean} body.has_wiki           - Either true to enable the wiki for this repository or false to disable it. Default: true.
	 * @param {string}  body.default_branch     - Updates the default branch for this repository.
	 * @param {boolean} body.allow_squash_merge - Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true
	 * @param {boolean} body.allow_merge_commit - Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true
	 * @param {boolean} body.allow_rebase_merge - Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true
	 *
	 * @return {JSON} repo data
	 */
	updateRepository: function(owner, repo, body) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}`, 'patch', body);
	},
	
	/**
	 * List all topics for a repository
	 * @see {@link https://developer.github.com/v3/repos/#list-all-topics-for-a-repository}
	 * @param {int}    owner       - The repo's owner id
	 * @param {int}    repo        - The repo id
	 * @param {object} params      - An object of parameters for the request
	 * @param {int}    params.page - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getRepositoryTopics: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/topics?${req.assembleQueryParams(params,
			['since'])}`);
	},
	
	/**
	 * Replace all topics for a repository
	 * @see {@link https://developer.github.com/v3/repos/#replace-all-topics-for-a-repository}
	 * @param {int}      owner      - The repo's owner id
	 * @param {int}      repo       - The repo id
	 * @param {object}   body       - The request body
	 * @param {string[]} body.names - Required. An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([ - ) to clear all topics from the repository.
	 *
	 * @return {JSON} repo data
	 */
	updateRepositoryTopics: function(owner, repo, body) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/topics?`, 'put', body);
	},
	
	/**
	 * List contributors
	 * Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
	 * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
	 * @see {@link https://developer.github.com/v3/repos/#list-contributors}
	 * @param {int}    owner       - The repo's owner id
	 * @param {int}    repo        - The repo id
	 * @param {object} params      - An object of parameters for the request
	 * @param {int}    params.anon - Set to 1 or true to include anonymous contributors in results.
	 * @param {int}    params.page - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getRepositoryContributors: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/contributors?${req.assembleQueryParams(params,
			['anon', 'page'])}`);
	},
	
	/**
	 * List languages
	 * Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
	 * @see {@link https://developer.github.com/v3/repos/#list-languages}
	 * @param {int} owner - The repo's owner id
	 * @param {int} repo  - The repo id
	 *
	 * @return {JSON} repo data
	 */
	getRepositoryLanguages: function(owner, repo) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/languages`);
	},
	
	/**
	 * List Teams
	 * @see {@link https://developer.github.com/v3/repos/#list-teams}
	 * @param {int}    owner       - The repo's owner id
	 * @param {int}    repo        - The repo id
	 * @param {object} params      - An object of parameters for the request
	 * @param {int}    params.page - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getRepositoryTeams: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/teams?${req.assembleQueryParams(params,
			['page'])}`);
	},
	
	/**
	 * 
	 * @see {@link https://developer.github.com/v3/repos/#list-tags}
	 * @param {int}    owner       - The repo's owner id
	 * @param {int}    repo        - The repo id
	 * @param {object} params      - An object of parameters for the request
	 * @param {int}    params.page - The page of results to retrieve
	 *
	 * @return {JSON} repo data
	 */
	getRepositoryTags: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/tags?${req.assembleQueryParams(params,
			['page'])}`);
	},
	
	/**
	 * 
	 * @see {@link https://developer.github.com/v3/repos/#}
	 * @param {int} owner - The repo's owner id
	 * @param {int} repo  - The repo id
	 *
	 * @return {nothing}
	 */
	deleteRepository: function(owner, repo) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}`, 'delete');
	}
};