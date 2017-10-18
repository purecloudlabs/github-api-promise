const config = require('../config');
const req = require('../request-helpers');


/**
 * Pull Requests module
 * @module pullRequests/pullRequests
 */
module.exports = {

	/**
	 * List comments on a pull request
	 * By default, review comments are ordered by ascending ID.
	 * 
	 * @see {@link https://developer.github.com/v3/pulls/comments/#list-comments-on-a-pull-request}
	 * 
	 * @param {string} owner            - The repo's owner
	 * @param {string} repo             - The repo's name
	 * @param {string} number           - The pull request number
	 * @param {object} params           - An object of parameters for the request
	 * @param {string} params.sort      - Can be either created or updated comments. Default: created
	 * @param {string} params.direction - Can be either asc or desc. Ignored without sort parameter.
	 * @param {string} params.since     - This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only returns comments updated at or after this time.
	 * @param {int}    params.page      - The page of results to retrieve
	 *
	 * @return {object} Pull request comment data
	 */
	getPullRequestComments: function(owner, repo, number, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/pulls/${number}/comments?${req.assembleQueryParams(params,
			['sort', 'direction', 'since', 'page'])}`);
	},

	/**
	 * List comments in a repository
	 * By default, review comments are ordered by ascending ID.
	 * 
	 * @see {@link https://developer.github.com/v3/pulls/comments/#list-comments-in-a-repository}
	 * 
	 * @param {string} owner            - The repo's owner
	 * @param {string} repo             - The repo's name
	 * @param {string} number           - The pull request number
	 * @param {object} params           - An object of parameters for the request
	 * @param {string} params.sort      - Can be either created or updated comments. Default: created
	 * @param {string} params.direction - Can be either asc or desc. Ignored without sort parameter.
	 * @param {string} params.since     - This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only returns comments updated at or after this time.
	 * @param {int}    params.page      - The page of results to retrieve
	 *
	 * @return {object} Pull request comment data
	 */
	getRepositoryComments: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/pulls/comments?${req.assembleQueryParams(params,
			['sort', 'direction', 'since', 'page'])}`);
	},

	/**
	 * Get a single comment
	 * 
	 * @see {@link https://developer.github.com/v3/pulls/comments/#get-a-single-comment}
	 * 
	 * @param {string} owner - The repo's owner
	 * @param {string} repo  - The repo's name
	 * @param {string} id    - The comment's id
	 *
	 * @return {object} Pull request comment data
	 */
	getComment: function(owner, repo, id) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/pulls/comments/${id}`);
	},

	/**
	 * Create a comment
	 * Alternative input: Instead of passing commit_id, path, and position, you can reply to an existing pull request comment like this:
	 * 
	 * @see {@link https://developer.github.com/v3/pulls/comments/#create-a-comment}
	 * 
	 * @param {string}  owner            - The repo's owner
	 * @param {string}  repo             - The repo's name
	 * @param {string}  number           - The pull request number
	 * @param {object}  body             - The request body
	 * @param {string}  body.body        - Required. The text of the comment.
	 * @param {string}  body.commit_id   - Required. The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the position.
	 * @param {string}  body.path        - Required. The relative path to the file that necessitates a comment.
	 * @param {integer} body.position    - Required. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
	 * @param {integer} body.in_reply_to - Required. The comment ID to reply to. Note: This must be the ID of a top-level comment, not a reply to that comment. Replies to replies are not supported.
	 *
	 * @return {object} Pull request comment data
	 */
	createComment: function(owner, repo, number, body) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/pulls/${number}/comments`, 'post', body);
	},

	/**
	 * 
	 * 
	 * @see {@link https://developer.github.com/v3/pulls/comments/#edit-a-comment}
	 * 
	 * @param {string} owner     - The repo's owner
	 * @param {string} repo      - The repo's name
	 * @param {string} id        - The comment's id
	 * @param {object} body      - The request body
	 * @param {string} body.body - Required. The text of the comment.
	 *
	 * @return {object} Pull request comment data
	 */
	editComment: function(owner, repo, id, body) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/pulls/comments/${id}`, 'patch', body);
	},

	/**
	 * Delete a comment
	 * 
	 * @see {@link https://developer.github.com/v3/pulls/comments/#delete-a-comment}
	 * 
	 * @param {string} owner - The repo's owner
	 * @param {string} repo  - The repo's name
	 * @param {string} id    - The comment's id
	 *
	 * @return {null} 204 no content
	 */
	deleteComment: function(owner, repo, id) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/pulls/comments/${id}`, 'delete');
	}
};