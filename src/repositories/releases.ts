import axios from "axios";
import { Endpoints } from "@octokit/types";
import config from "../config";
import fs from "fs";

function getRepoUrl(additionalPath: string) {
  var url = config.host + "/repos/" + config.owner + "/" + config.repo + "/";
  if (additionalPath) url += additionalPath;
  return url;
}

function logRequestSuccess(res: any, message?: string) {
  if (config.debug != true) {
    return;
  }

  console.log(
    "[INFO]" +
      "[" +
      res.statusCode +
      "]" +
      "[" +
      res.req.method +
      " " +
      res.req.path +
      "] " +
      (message ? message : "")
  );
}

function logRequestError(err: any) {
  if (err) {
    console.log(
      "[ERROR]" +
        "[" +
        (err.res ? err.res.statusCode : "Unknown Status Code") +
        "]" +
        "[" +
        (err.res && err.res.req ? err.res.req.method : "Unknown Method") +
        " " +
        (err.res && err.res.req ? err.res.req.path : "Unknown Path") +
        "] " +
        (err.message ? err.message : "Unknown Error Message")
    );
  } else {
    console.log("[ERROR] Unknown Error");
  }
}


/**
 * @module repositories/releases
 */
export default {
  /**
   * This returns a list of releases, which does not include regular Git tags that have not been
   * associated with a release. To get a list of Git tags, use the Repository Tags API. Information
   * about published releases are available to everyone. Only users with push access will receive
   * listings for draft releases.
   * @return {JSON}			A list of release data
   */
  getRepositoryReleases: function (): Promise<
    Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(getRepoUrl("releases"), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Gets data about a single release
   * @param  {string} releaseId 	The ID of the release
   * @return {JSON}           	The release data
   */
  getRepositoryRelease: function (
    releaseId: string
  ): Promise<
    Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(getRepoUrl("releases/" + releaseId), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * View the latest published full release for the repository. Draft releases and prereleases
   * are not returned by this endpoint.
   * @return {JSON}           	The release data
   */
  getLatestRepositoryRelease: function (): Promise<
    Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(getRepoUrl("releases/latest"), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Get a published release with the specified tag. This fails with a 404 if the tag isn't used by a release.
   * @param  {string} tag  		The tag of the release
   * @return {JSON}           	The release data
   */
  getRepositoryReleaseByTagName: function (
    tag: string
  ): Promise<
    Endpoints["GET /repos/{owner}/{repo}/releases/tags/{tag}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(getRepoUrl("releases/tags/" + tag), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Users with push access to the repository can create a release. Returns 422 if anything is wrong with the values in the body.
   * @param  {JSON} 	body  		A JSON document to send with the request
   * @return {JSON}           	The release data
   */
  createRelease: function (
    body: any
  ): Promise<
    Endpoints["POST /repos/{owner}/{repo}/releases"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .post(getRepoUrl("releases"), body, {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
              "Content-Type": "application/json",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Users with push access to the repository can edit a release.
   * @param  {string} releaseId 	The ID of the release
   * @param  {JSON} 	body  		A JSON document to send with the request
   * @return {JSON}           	The release data
   */
  updateRelease: function (
    releaseId: string,
    body: any
  ): Promise<
    Endpoints["PATCH /repos/{owner}/{repo}/releases/{release_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .patch(getRepoUrl("releases/" + releaseId), body, {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
              "Content-Type": "application/json",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Users with push access to the repository can delete a release.
   * @param  {string} releaseId 	The ID of the release
   * @return {string}           	Undefined on success, otherwise an error message
   */
  deleteRelease: function (
    releaseId: string
  ): Promise<
    Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .delete(getRepoUrl("releases/" + releaseId), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Gets a list of existing assets for a release.
   * @param  {string} releaseId 	The ID of the release
   * @return {JSON}           	A list of asset data
   */
  getReleaseAssets: function (
    releaseId: string
  ): Promise<
    Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(getRepoUrl("releases/" + releaseId + "/assets"), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
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
  uploadReleaseAsset: function (
    uploadUrl: string,
    assetName: string,
    assetLabel: string,
    localFilePath: string,
    contentType: string
  ): Promise<
    Endpoints["POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        const token = config.token;

        // Remove this from URL: {?name,label}
        if (uploadUrl.substring(uploadUrl.length - 13) == "{?name,label}") {
          uploadUrl = uploadUrl.substring(0, uploadUrl.length - 13);
        }

        // Add name and label to URL
        uploadUrl +=
          "?name=" +
          encodeURIComponent(assetName) +
          "&label=" +
          encodeURIComponent(assetLabel);

        // Get file contents
        fs.readFile(localFilePath, function (err: any, data: any) {
          // Check for error
          if (err) {
            console.log(err);
            reject(err);
            return;
          }

          // POST file to github
          axios
            .post(uploadUrl, data, {
              headers: {
                Authorization: `token ${config.token}`,
                "User-Agent": "github-api-promise",
                "Content-Type": `${contentType}`,
              },
            })

            .then(
              function (res: any) {
                logRequestSuccess(res);
                resolve(res.body);
              },
              function (err: any) {
                if (err.status == "422") {
                  console.log("Upload failed. Error body: ");
                  console.log(JSON.stringify(err.body, null, 2));
                }
                logRequestError(err);
                reject(err.message);
              }
            );
        });
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Get data about a single release asset. Download the file from the URL in the
   * browser_download_url property.
   * @param  {string} assetId 	The ID of the asset
   * @return {JSON}         		The asset data
   */
  getReleaseAssetData: function (
    assetId: string
  ): Promise<
    Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .get(getRepoUrl("releases/assets/" + assetId), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Users with push access to the repository can edit a release asset.
   * @param  {string} assetId 	The ID of the asset
   * @param  {JSON} 	body    	A JSON document to send with the request
   * @return {JSON}				The asset data
   */
  updateReleaseAsset: function (
    assetId: string,
    body: any
  ): Promise<
    Endpoints["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .patch(getRepoUrl("releases/assets/" + assetId), body, {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
              "Content-Type": "application/json",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },

  /**
   * Deletes an asset from a release
   * @param  {string} assetId 	The ID of the asset
   * @return {string}           	Undefined on success, otherwise an error message
   */
  deleteReleaseAsset: function (
    assetId: string
  ): Promise<
    Endpoints["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]
  > {
    return new Promise((resolve, reject) => {
      try {
        axios
          .delete(getRepoUrl("releases/assets/" + assetId), {
            headers: {
              Authorization: `token ${config.token}`,
              "User-Agent": "github-api-promise",
            },
          })
          .then(
            function (res: any) {
              logRequestSuccess(res);
              resolve(res.body);
            },
            function (err: any) {
              logRequestError(err);
              reject(err.message);
            }
          );
      } catch (err) {
        console.log(err);
        reject(err.message);
      }
    });
  },
};
