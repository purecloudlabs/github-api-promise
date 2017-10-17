const config = require('../config');
const req = require('../request-helpers');



/**
 * @module issues/comments
 */
module.exports = {

	/**
	 * List comments on an issue
	 * Issue Comments are ordered by ascending ID.
	 * 
	 * @see {@link https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue}
	 * 
	 * @param {string} owner       - The repo's owner
	 * @param {string} repo        - The repo's name
	 * @param {string} number      - The issue id
	 * @param {object} params      - An object of parameters for the request
	 * @param {int}    params.page - The page of results to retrieve
	 *
	 * @return {object} Comment data
	 */
	getIssueComments: function(owner, repo, number, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/${number}/comments?${req.assembleQueryParams(params,
			['page'])}`);
	},

	/**
	 * List comments in a repository
	 * By default, Issue Comments are ordered by ascending ID.
	 * 
	 * @see {@link https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository}
	 * 
	 * @param {string} owner            - The repo's owner
	 * @param {string} repo             - The repo's name
	 * @param {object} params           - An object of parameters for the request
	 * @param {int}    params.sort      - Either created or updated. Default: created
	 * @param {int}    params.direction - Either asc or desc. Ignored without the sort parameter.
	 * @param {int}    params.since     - Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
	 *
	 * @return {object} Comment data
	 */
	getRepositoryComments: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/comments?${req.assembleQueryParams(params,
			['sort', 'direction', 'since'])}`);
	},

	/**
	 * Get a single comment
	 * 
	 * @see {@link https://developer.github.com/v3/issues/comments/#get-a-single-comment}
	 * 
	 * @param {string} owner - The repo's owner
	 * @param {string} repo  - The repo's name
	 * @param {string} id    - The comment id
	 *
	 * @return {object} Comment data
	 */
	getComment: function(owner, repo, id) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/comments/${id}`);
	},

	/**
	 * Create a comment
	 * 
	 * @see {@link https://developer.github.com/v3/issues/comments/#create-a-comment}
	 * 
	 * @param {string} owner     - The repo's owner
	 * @param {string} repo      - The repo's name
	 * @param {string} number    - The issue id
	 * @param {object} body      - The request body
	 * @param {string} body.body - The comment text
	 *
	 * @return {object} Comment data
	 */
	createComment: function(owner, repo, number, body) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/${number}/comments`, 'post', body);
	},

	/**
	 * Edit a comment
	 * 
	 * @see {@link https://developer.github.com/v3/issues/comments/#edit-a-comment}
	 * 
	 * @param {string} owner     - The repo's owner
	 * @param {string} repo      - The repo's name
	 * @param {string} id        - The comment id
	 * @param {object} body      - The request body
	 * @param {string} body.body - The comment text
	 *
	 * @return {object} Comment data
	 */
	editComment: function(owner, repo, id, body) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/comments/${id}`, 'patch', body);
	},

	/**
	 * Delete a comment
	 * 
	 * @see {@link https://developer.github.com/v3/issues/comments/#delete-a-comment}
	 *
	 * @param {string} owner - The repo's owner
	 * @param {string} repo  - The repo's name
	 * @param {string} id    - The comment id
	 *
	 * @return {null} 204 no content
	 */
	deleteComment: function(owner, repo, id) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/comments/${id}`, 'delete');
	}
};