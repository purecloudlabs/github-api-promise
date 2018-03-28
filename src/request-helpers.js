const _ = require('lodash');
const log = new (require('lognext'))('request-helpers');
const Q = require('q');
const request = require('superagent-bluebird-promise');
const urlencode = require('urlencode');

var config = require('./config');

module.exports = {
	requestCount: 0,

	logRequestSuccess: function(res, message) {
		if (config.debug !== true) {
			return;
		}

		log.debug(
			'[' + res.statusCode + ']' + 
			'[' + res.req.method + ' ' + res.req.path + '] ' + 
			(message ? message : ''));
		log.debug(`Requests remaining: ${res.headers['x-ratelimit-remaining']}/${res.headers['x-ratelimit-limit']}, reset at ${new Date(res.headers['x-ratelimit-reset']*1000)}`);
	},

	assembleQueryParams: function(params, paramNames) {
		if (!params) return '';

		let s = '';
		paramNames.forEach((paramName) => {
			if (params[paramName])
				s += `&${paramName}=${urlencode(params[paramName])}`;
		});

		return _.trimStart(s, '&');
	},

	// Returns only the response body
	standardRequest: function(url, method = 'get', body = undefined) {
		var deferred = Q.defer();

		this.extendedRequest(url, method, body)
			.then((res) => { deferred.resolve(res.body); })
			.catch((err) => { deferred.reject(err); });

		return deferred.promise;
	},

	// Returns an object with additional information about the request/response
	extendedRequest: function(url, method = 'get', body = undefined) {
		var deferred = Q.defer();
		let self = this;

		try {
			let req = undefined;

			// Create request object
			switch (method.toLowerCase().trim()) {
				case 'post': {
					req = request.post(url).send(body);
					break;
				}
				case 'patch': {
					req = request.patch(url).send(body);
					break;
				}
				case 'put': {
					req = request.put(url).send(body);
					break;
				}
				case 'delete': {
					req = request.delete(url);
					break;
				}
				case 'get': {
					req = request.get(url);
					break;
				}
				default: {
					throw new Error(`Unsupported HTTP verb: ${method}`);
				}
			}

			self.requestCount++;

			// Set standard stuff and handle response
			req
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					self.logRequestSuccess(res);
					deferred.resolve({
						body: res.body,
						headers: res.headers
					});
				}, 
				function(err) {
					// TODO: handle rate limiting (github sends a 403, not a 429)
					// https://developer.github.com/v3/#rate-limiting
					log.error(err);
					deferred.reject(err);
				});
		} catch(err) {
			log.error(err);
			deferred.reject(err);
		}

		return deferred.promise;
	}
};