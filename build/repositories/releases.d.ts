import { Endpoints } from "@octokit/types";
/**
 * @module repositories/releases
 */
declare const _default: {
    /**
     * This returns a list of releases, which does not include regular Git tags that have not been
     * associated with a release. To get a list of Git tags, use the Repository Tags API. Information
     * about published releases are available to everyone. Only users with push access will receive
     * listings for draft releases.
     * @return {JSON}			A list of release data
     */
    getRepositoryReleases: () => Promise<Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]["data"]>;
    /**
     * Gets data about a single release
     * @param  {string} releaseId 	The ID of the release
     * @return {JSON}           	The release data
     */
    getRepositoryRelease: (releaseId: string) => Promise<Endpoints["GET /repos/{owner}/{repo}/releases/{release_id}"]["response"]["data"]>;
    /**
     * View the latest published full release for the repository. Draft releases and prereleases
     * are not returned by this endpoint.
     * @return {JSON}           	The release data
     */
    getLatestRepositoryRelease: () => Promise<Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["response"]["data"]>;
    /**
     * Get a published release with the specified tag. This fails with a 404 if the tag isn't used by a release.
     * @param  {string} tag  		The tag of the release
     * @return {JSON}           	The release data
     */
    getRepositoryReleaseByTagName: (tag: string) => Promise<Endpoints["GET /repos/{owner}/{repo}/releases/tags/{tag}"]["response"]["data"]>;
    /**
     * Users with push access to the repository can create a release. Returns 422 if anything is wrong with the values in the body.
     * @param  {JSON} 	body  		A JSON document to send with the request
     * @return {JSON}           	The release data
     */
    createRelease: (body: any) => Promise<Endpoints["POST /repos/{owner}/{repo}/releases"]["response"]["data"]>;
    /**
     * Users with push access to the repository can edit a release.
     * @param  {string} releaseId 	The ID of the release
     * @param  {JSON} 	body  		A JSON document to send with the request
     * @return {JSON}           	The release data
     */
    updateRelease: (releaseId: string, body: any) => Promise<Endpoints["PATCH /repos/{owner}/{repo}/releases/{release_id}"]["response"]["data"]>;
    /**
     * Users with push access to the repository can delete a release.
     * @param  {string} releaseId 	The ID of the release
     * @return {string}           	Undefined on success, otherwise an error message
     */
    deleteRelease: (releaseId: string) => Promise<Endpoints["DELETE /repos/{owner}/{repo}/releases/{release_id}"]["response"]["data"]>;
    /**
     * Gets a list of existing assets for a release.
     * @param  {string} releaseId 	The ID of the release
     * @return {JSON}           	A list of asset data
     */
    getReleaseAssets: (releaseId: string) => Promise<Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]>;
    /**
     * Upload an asset to a release. 422 if upload is rejected (dupe file name, etc.)
     * @param  {string} uploadUrl 		The upload_url value from the release's data
     * @param  {string} assetName     	The file name of the asset
     * @param  {string} assetLabel    	An alternate short description of the asset. Used in place of the filename.
     * @param  {string} localFilePath 	The full path to the file to be uploaded
     * @param  {string} contentType 	The MIME type of the file (e.g. 'application/zip')
     * @return {JSON}               	The asset data
     */
    uploadReleaseAsset: (uploadUrl: string, assetName: string, assetLabel: string, localFilePath: string, contentType: string) => Promise<Endpoints["POST {origin}/repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}"]["response"]["data"]>;
    /**
     * Get data about a single release asset. Download the file from the URL in the
     * browser_download_url property.
     * @param  {string} assetId 	The ID of the asset
     * @return {JSON}         		The asset data
     */
    getReleaseAssetData: (assetId: string) => Promise<Endpoints["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]>;
    /**
     * Users with push access to the repository can edit a release asset.
     * @param  {string} assetId 	The ID of the asset
     * @param  {JSON} 	body    	A JSON document to send with the request
     * @return {JSON}				The asset data
     */
    updateReleaseAsset: (assetId: string, body: any) => Promise<Endpoints["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]>;
    /**
     * Deletes an asset from a release
     * @param  {string} assetId 	The ID of the asset
     * @return {string}           	Undefined on success, otherwise an error message
     */
    deleteReleaseAsset: (assetId: string) => Promise<Endpoints["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"]["response"]["data"]>;
};
export default _default;
