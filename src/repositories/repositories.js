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
	 * @param {object}	params 							- An object of parameters for the request
	 * @param {string} 	params.visibility		- Can be one of all, public, or private. Default: all
	 * @param {string} 	params.affiliation	- default: owner, collaborator, organization_member
	 * @param {string} 	params.type 				- Can be one of all, owner, public, private, member. Default: all. Will cause a 422 error if used in the same request as visibility or affiliation.
	 * @param {string} 	params.sort 				- Can be one of created, updated, pushed, full_name. Default: full_name
	 * @param {string} 	params.direction 		- Can be one of asc or desc. Default: when using full_name: asc; otherwise desc
	 * @param {int} 		params.page 				- The page of results to retrieve
	 * @return {JSON}	repo data
	 */
	getMyRepos: function(params) {
		return req.standardRequest(`${config.host}/user/repos?${req.assembleQueryParams(params,
			['visibility','affiliation','type','sort','direction','page'])}`);
	},
	
	/**
	 * List user repositories
	 * List public repositories for the specified user.
	 * @see {@link https://developer.github.com/v3/repos/#list-user-repositories}
	 * @param {string}	username						- The specified user
	 * @param {object}	params 							- An object of parameters for the request
	 * @param {string} 	params.type 				- Can be one of all, owner, member. Default: owner
	 * @param {string} 	params.sort 				- Can be one of created, updated, pushed, full_name. Default: full_name
	 * @param {string} 	params.direction 		- Can be one of asc or desc. Default: when using full_name: asc; otherwise desc
	 * @param {int} 		params.page 				- The page of results to retrieve
	 * @return {JSON}	repo data
	 */
	getUserRepos: function(username, params) {
		return req.standardRequest(`${config.host}/users/${username}/repos?${req.assembleQueryParams(params,
			['type','sort','direction','page'])}`);
	},
	
	/**
	 * List organization repositories
	 * List repositories for the specified org.
	 * @see {@link https://developer.github.com/v3/repos/#list-organization-repositories}
	 * @param {string}	org						- The specified org
	 * @param {object}	params 				- An object of parameters for the request
	 * @param {string}	params.type 	- Can be one of all, public, private, forks, sources, member. Default: all
	 * @param {int} 		params.page 	- The page of results to retrieve
	 * @return {JSON}	repo data
	 */
	getOrgRepos: function(org, params) {
		return req.standardRequest(`${config.host}/orgs/${org}/repos?${req.assembleQueryParams(params,
			['type','page'])}`);
	}
};