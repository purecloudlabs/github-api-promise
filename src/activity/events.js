const fs = require('fs');
const log = new (require('lognext'))('events');
const Q = require('q');
const request = require('superagent-bluebird-promise');

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



module.exports = {
	/**
	 * List public events
	 * @see {@link https://developer.github.com/v3/activity/events/#list-public-events}
	 * @return {JSON}			Event data
	 */
	getEvents: function(page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List repository events
	 * @see {@link https://developer.github.com/v3/activity/events/#list-repository-events}
	 * @return {JSON}			Event data
	 */
	getRepositoryEvents: function(owner, repo, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/repos/${owner}/${repo}/events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List issue events for a repository
	 * Repository issue events have a different format than other events, as documented in the Issue Events API.
	 * @see {@link https://developer.github.com/v3/activity/events/#list-issue-events-for-a-repository}
	 * @return {JSON}			Event data
	 */
	getRepositoryIssueEvents: function(owner, repo, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/repos/${owner}/${repo}/issues/events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List public events for a network of repositories
	 * @see {@link https://developer.github.com/v3/activity/events/#list-public-events-for-a-network-of-repositories}
	 * @return {JSON}			Event data
	 */
	getNetworkRepositoryEvents: function(owner, repo, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/networks/${owner}/${repo}/events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List public events for an organization
	 * @see {@link https://developer.github.com/v3/activity/events/#list-public-events-for-an-organization}
	 * @return {JSON}			Event data
	 */
	getOrganizationEvents: function(org, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/orgs/${org}/events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List events that a user has received
	 * These are events that you've received by watching repos and following users. If you are authenticated as 
	 * the given user, you will see private events. Otherwise, you'll only see public events.
	 * @see {@link https://developer.github.com/v3/activity/events/#list-events-that-a-user-has-received}
	 * @return {JSON}			Event data
	 */
	getUserEventsReceived: function(username, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/users/${username}/received_events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List public events that a user has received
	 * @see {@link https://developer.github.com/v3/activity/events/#list-public-events-that-a-user-has-received}
	 * @return {JSON}			Event data
	 */
	getUserPublicEventsReceived: function(username, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/users/${username}/received_events/public`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List events performed by a user
	 * @see {@link https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user}
	 * @return {JSON}			Event data
	 */
	getUserEvents: function(username, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/users/${username}/events`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List public events performed by a user
	 * @see {@link https://developer.github.com/v3/activity/events/#list-events-performed-by-a-user}
	 * @return {JSON}			Event data
	 */
	getUserPublicEvents: function(username, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/users/${username}/events/public`;
	 		if (page)
	 			url += `?page=${page}`;

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
	 * List events for an organization
	 * This is the user's organization dashboard. You must be authenticated as the user to view this.
	 * @see {@link https://developer.github.com/v3/activity/events/#list-events-for-an-organization}
	 * @return {JSON}			Event data
	 */
	getUserOrganizationEvents: function(username, org, page) {
	 	var deferred = Q.defer();

	 	try {
	 		let url = `${config.host}/users/${username}/events/orgs/${org}`;
	 		if (page)
	 			url += `?page=${page}`;

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