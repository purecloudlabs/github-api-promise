var request = require('superagent-bluebird-promise');
var Q = require('q');
var fs = require('fs');
var config = require('../config');

function getRepoUrl(additionalPath) {
	var url = config.host + '/repos/' + config.owner + '/' + config.repo + '/';
	if (additionalPath)
		url += additionalPath;
	return url;
}

function logRequestSuccess(res, message) {
	if (config.debug != true) {
		return;
	}

	console.log(
		'[INFO]' + 
		'[' + res.statusCode + ']' + 
		'[' + res.req.method + ' ' + res.req.path + '] ' + 
		(message ? message : ''));
}

function logRequestError(err) {
	console.log('[ERROR]' + 
		'[' + err.res.statusCode + ']' + 
		'[' + err.res.req.method + ' ' + err.res.req.path + '] ' + 
		err.message);
}


/**
 * @module repositories/releases
 */
module.exports = {
	/**
	 * This returns a list of releases, which does not include regular Git tags that have not been 
	 * associated with a release. To get a list of Git tags, use the Repository Tags API. Information 
	 * about published releases are available to everyone. Only users with push access will receive 
	 * listings for draft releases.
	 * @return {JSON}			A list of release data
	 */
	getRepositoryReleases: function() {
		var deferred = Q.defer();

		try {
			request
				.get(getRepoUrl('releases'))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Gets data about a single release
	 * @param  {string} releaseId 	The ID of the release
	 * @return {JSON}           	The release data
	 */
	getRepositoryRelease: function(releaseId) {
		var deferred = Q.defer();

		try {
			request
				.get(getRepoUrl('releases/' + releaseId))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * View the latest published full release for the repository. Draft releases and prereleases 
	 * are not returned by this endpoint.
	 * @return {JSON}           	The release data
	 */
	getLatestRepositoryRelease: function() {
		var deferred = Q.defer();

		try {
			request
				.get(getRepoUrl('releases/latest'))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Get a published release with the specified tag. This fails with a 404 if the tag isn't used by a release.
	 * @param  {string} tag  		The tag of the release
	 * @return {JSON}           	The release data
	 */
	getRepositoryReleaseByTagName: function(tag) {
		var deferred = Q.defer();

		try {
			request
				.get(getRepoUrl('releases/tags/' + tag))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Users with push access to the repository can create a release. Returns 422 if anything is wrong with the values in the body.
	 * @param  {JSON} 	body  		A JSON document to send with the request
	 * @return {JSON}           	The release data
	 */
	createRelease: function(body) {
		var deferred = Q.defer();

		try {
			request
				.post(getRepoUrl('releases'))
				.set('Authorization', 'token ' + config.token)
				.set('Content-Type', 'application/json')
				.send(body)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Users with push access to the repository can edit a release.
	 * @param  {string} releaseId 	The ID of the release
	 * @param  {JSON} 	body  		A JSON document to send with the request
	 * @return {JSON}           	The release data
	 */
	updateRelease: function(releaseId, body) {
		var deferred = Q.defer();

		try {
			request
				.patch(getRepoUrl('releases/' + releaseId))
				.set('Authorization', 'token ' + config.token)
				.set('Content-Type', 'application/json')
				.send(body)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Users with push access to the repository can delete a release.
	 * @param  {string} releaseId 	The ID of the release
	 * @return {string}           	Undefined on success, otherwise an error message
	 */
	deleteRelease: function(releaseId) {
		var deferred = Q.defer();

		try {
			request
				.delete(getRepoUrl('releases/' + releaseId))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Gets a list of existing assets for a release.
	 * @param  {string} releaseId 	The ID of the release
	 * @return {JSON}           	A list of asset data
	 */
	getReleaseAssets: function(releaseId) {
		var deferred = Q.defer();

		try {
			request
				.get(getRepoUrl('releases/' + releaseId + '/assets'))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Upload an asset to a release. 422 if upload is rejected (dupe file name, etc.)
	 * @param  {string} uploadUrl 		The upload_url value from the release's data
	 * @param  {string} assetName     	The file name of the asset
	 * @param  {string} assetLabel    	An alternate short description of the asset. Used in place of the filename.
	 * @param  {string} localFilePath 	The full path to the file to be uploaded
	 * @param  {string} contentType 	The MIME type of the file (e.g. 'application/zip')
	 * @return {JSON}               	The asset data
	 */
	uploadReleaseAsset: function(uploadUrl, assetName, assetLabel, localFilePath, contentType) {
		var deferred = Q.defer();

		try {
			var token = config.token;

			// Remove this from URL: {?name,label}
			if (uploadUrl.substring(uploadUrl.length - 13) == '{?name,label}'){
				uploadUrl = uploadUrl.substring(0, uploadUrl.length - 13);
			}

			// Add name and label to URL
			uploadUrl += '?name=' + encodeURIComponent(assetName) + '&label=' + encodeURIComponent(assetLabel);

			// Get file contents
			fs.readFile(localFilePath, function(err, data) {
				// Check for error
				if (err) {
					console.log(err);
					deferred.reject(err);
					return;
				}

				// POST file to github
				request
					.post(uploadUrl)
					.set('Authorization', 'token ' + token)
					.set('Content-Type', contentType)
					.send(data)
					.then(function(res) {
						logRequestSuccess(res);
						deferred.resolve(res.body);
					}, 
					function(err) {
						if (err.status == '422'){
							console.log('Upload failed. Error body: ');
							console.log(JSON.stringify(err.body, null, 2));
						}
						logRequestError(err);
						deferred.reject(err.message);
					});
			});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Get data about a single release asset. Download the file from the URL in the 
	 * browser_download_url property.
	 * @param  {string} assetId 	The ID of the asset
	 * @return {JSON}         		The asset data
	 */
	getReleaseAssetData: function(assetId) {
		var deferred = Q.defer();

		try {
			request
				.get(getRepoUrl('releases/assets/' + assetId))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Users with push access to the repository can edit a release asset.
	 * @param  {string} assetId 	The ID of the asset
	 * @param  {JSON} 	body    	A JSON document to send with the request
	 * @return {JSON}				The asset data
	 */
	updateReleaseAsset: function(assetId, body) {
		var deferred = Q.defer();

		try {
			request
				.patch(getRepoUrl('releases/assets/' + assetId))
				.set('Authorization', 'token ' + config.token)
				.set('Content-Type', 'application/json')
				.send(body)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	},

	/**
	 * Deletes an asset from a release
	 * @param  {string} assetId 	The ID of the asset
	 * @return {string}           	Undefined on success, otherwise an error message
	 */
	deleteReleaseAsset: function(assetId) {
		var deferred = Q.defer();

		try {
			request
				.delete(getRepoUrl('releases/assets/' + assetId))
				.set('Authorization', 'token ' + config.token)
				.then(function(res) {
					logRequestSuccess(res);
					deferred.resolve(res.body);
				}, 
				function(err) {
					logRequestError(err);
					deferred.reject(err.message);
				});
		} catch(err) {
			console.log(err);
			deferred.reject(err.message);
		}

		return deferred.promise;
	}
};