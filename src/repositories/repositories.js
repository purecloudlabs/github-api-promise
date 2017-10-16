const _ = require('lodash');
const fs = require('fs');
const log = new (require('lognext'))('events');
const Q = require('q');
const request = require('superagent-bluebird-promise');
const urlencode = require('urlencode');

var config = require('../config');



function logRequestSuccess(res, message) {
	if (config.debug !== true) {
		return;
	}

	log.debug(
		'[' + res.statusCode + ']' + 
		'[' + res.req.method + ' ' + res.req.path + '] ' + 
		(message ? message : ''));
}

function assembleQueryParams(params, paramNames) {
	let s = '';
	paramNames.forEach((paramName) => {
		if (params[paramName])
			s += `&${paramName}=${urlencode(params[paramName])}`;
	});
	return _.trimStart(s, '&');
}



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
		var deferred = Q.defer();

		try {
			let url = `${config.host}/user/repos?${assembleQueryParams(params,
				['visibility','affiliation','type','sort','direction','page'])}`;

			request
				.get(url)
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					log.error(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			log.error(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
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
		var deferred = Q.defer();

		try {
			let url = `${config.host}/${username}?${assembleQueryParams(params,
				['type','sort','direction','page'])}`;

			request
				.get(url)
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					log.error(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			log.error(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
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
		var deferred = Q.defer();

		try {
			let url = `${config.host}/orgs/${org}/repos?${assembleQueryParams(params,
				['type','page'])}`;

			request
				.get(url)
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					log.error(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			log.error(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	}
};