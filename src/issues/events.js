const config = require('../config');
const req = require('../request-helpers');



module.exports = {

	/**
	 * List events for an issue
	 * 
	 * @see {@link https://developer.github.com/v3/issues/events/#list-events-for-an-issue}
	 * 
	 * @param {string} owner        - The repo's owner
	 * @param {string} repo         - The repo's name
	 * @param {string} issue_number - The issue id
	 * @param {object} params       - An object of parameters for the request
	 * @param {int}    params.page  - The page of results to retrieve
	 *
	 * @return {object} Event data
	 */
	getIssueEvents: function(owner, repo, issue_number, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/${issue_number}/events?${req.assembleQueryParams(params,
			['page'])}`);
	},

	/**
	 * List events for a repository
	 * 
	 * @see {@link https://developer.github.com/v3/issues/events/#list-events-for-a-repository}
	 * 
	 * @param {string} owner        - The repo's owner
	 * @param {string} repo         - The repo's name
	 * @param {object} params       - An object of parameters for the request
	 * @param {int}    params.page  - The page of results to retrieve
	 *
	 * @return {object} Event data
	 */
	getRepositoryIssueEvents: function(owner, repo, params) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/events?${req.assembleQueryParams(params,
			['page'])}`);
	},

	/**
	 * Get a single event
	 * 
	 * @see {@link https://developer.github.com/v3/issues/events/#}
	 * 
	 * @param {string} owner - The repo's owner
	 * @param {string} repo  - The repo's name
	 * @param {string} id    - The issue id
	 *
	 * @return {object} Event data
	 */
	getEvent: function(owner, repo, id) {
		return req.standardRequest(`${config.host}/repos/${owner}/${repo}/issues/events/${id}`);
	}
};