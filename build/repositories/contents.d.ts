import { Params, Body } from "../types";
/**
 * Contents module
 * @module repositories/contents
 */
declare const _default: {
    /**
     * Gets the preferred README for a repository.
     *
     * @see {@link https://developer.github.com/v3/repos/contents/#get-the-readme}
     *
     * @param {string} owner         - The repo's owner
     * @param {string} repo          - The repo's name
     * @param {object} params        - An object of parameters for the request
     * @param {string} params.ref    - The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
     *
     * @return {object} README data object
     */
    getReadme: (owner: string, repo: string, params?: Params) => Promise<import("@octokit/types").OctokitResponse<{
        type: "file";
        encoding: string;
        size: number;
        name: string;
        path: string;
        content: string;
        sha: string;
        url: string;
        git_url: string;
        html_url: string;
        download_url: string;
        _links: {
            git: string;
            html: string;
            self: string;
        };
        target?: string;
        submodule_git_url?: string;
    }, 200>>;
    /**
     * Gets the contents of a file or directory in a repository. Specify the file path or directory in :path. If you omit :path, you will receive the contents of all files in the repository.
     *
     * @see {@link https://developer.github.com/v3/repos/contents/#get-contents}
     *
     * @param {string} owner         - The repo's owner
     * @param {string} repo          - The repo's name
     * @param {string} path          - The content path
     * @param {object} params        - An object of parameters for the request
     * @param {string} params.ref    - The name of the commit/branch/tag. Default: the repository’s default branch (usually master)
     *
     * @return {object} Content data object
     */
    getContents: (owner: string, repo: string, path: string, params?: Params) => Promise<import("@octokit/types").OctokitResponse<{
        type: "file";
        encoding: string;
        size: number;
        name: string;
        path: string;
        content: string;
        sha: string;
        url: string;
        git_url: string;
        html_url: string;
        download_url: string;
        _links: {
            git: string;
            html: string;
            self: string;
        };
        target?: string;
        submodule_git_url?: string;
    } | {
        type: "file" | "dir" | "submodule" | "symlink";
        size: number;
        name: string;
        path: string;
        content?: string;
        sha: string;
        url: string;
        git_url: string;
        html_url: string;
        download_url: string;
        _links: {
            git: string;
            html: string;
            self: string;
        };
    }[] | {
        type: "symlink";
        target: string;
        size: number;
        name: string;
        path: string;
        sha: string;
        url: string;
        git_url: string;
        html_url: string;
        download_url: string;
        _links: {
            git: string;
            html: string;
            self: string;
        };
    } | {
        type: "submodule";
        submodule_git_url: string;
        size: number;
        name: string;
        path: string;
        sha: string;
        url: string;
        git_url: string;
        html_url: string;
        download_url: string;
        _links: {
            git: string;
            html: string;
            self: string;
        };
    }, 200>>;
    /**
     * Creates a new file or updates an existing file in a repository.
     *
     * @see {@link https://developer.github.com/v3/repos/contents/#create-or-update-a-file}
     *
     * @param {string} owner                  - The repo's owner
     * @param {string} repo                   - The repo's name
     * @param {string} path                   - The content path
     * @param {object} body                   - The request body
     * @param {string} body.message           - Required. The commit message.
     * @param {string} body.content           - Required. The new file content, using Base64 encoding.
     * @param {string} body.sha               - Required if you are updating a file. The blob SHA of the file being replaced.
     * @param {string} body.branch            - The branch name. Default: the repository’s default branch (usually master)
     * @param {object} body.committer         - The person that committed the file. Default: the authenticated user.
     * @param {string} body.committer.name    - Required. The name of the author or committer of the commit. You'll receive a 422 status code if name is omitted.
     * @param {string} body.committer.email   - Required. The email of the author or committer of the commit. You'll receive a 422 status code if email is omitted.
     * @param {object} body.author            - The author of the file. Default: The committer or the authenticated user if you omit committer.
     * @param {string} body.author.name       - Required. The name of the author or committer of the commit. You'll receive a 422 status code if name is omitted.
     * @param {string} body.author.email      - Required. The email of the author or committer of the commit. You'll receive a 422 status code if email is omitted.
     *
     * @return {object} Commit data
     */
    putContents: (owner: string, repo: string, path: string, body: Body) => Promise<import("@octokit/types").OctokitResponse<{
        content: {
            name?: string;
            path?: string;
            sha?: string;
            size?: number;
            url?: string;
            html_url?: string;
            git_url?: string;
            download_url?: string;
            type?: string;
            _links?: {
                self?: string;
                git?: string;
                html?: string;
            };
        };
        commit: {
            sha?: string;
            node_id?: string;
            url?: string;
            html_url?: string;
            author?: {
                date?: string;
                name?: string;
                email?: string;
            };
            committer?: {
                date?: string;
                name?: string;
                email?: string;
            };
            message?: string;
            tree?: {
                url?: string;
                sha?: string;
            };
            parents?: {
                url?: string;
                html_url?: string;
                sha?: string;
            }[];
            verification?: {
                verified?: boolean;
                reason?: string;
                signature?: string;
                payload?: string;
            };
        };
    }, 200> | import("@octokit/types").OctokitResponse<{
        content: {
            name?: string;
            path?: string;
            sha?: string;
            size?: number;
            url?: string;
            html_url?: string;
            git_url?: string;
            download_url?: string;
            type?: string;
            _links?: {
                self?: string;
                git?: string;
                html?: string;
            };
        };
        commit: {
            sha?: string;
            node_id?: string;
            url?: string;
            html_url?: string;
            author?: {
                date?: string;
                name?: string;
                email?: string;
            };
            committer?: {
                date?: string;
                name?: string;
                email?: string;
            };
            message?: string;
            tree?: {
                url?: string;
                sha?: string;
            };
            parents?: {
                url?: string;
                html_url?: string;
                sha?: string;
            }[];
            verification?: {
                verified?: boolean;
                reason?: string;
                signature?: string;
                payload?: string;
            };
        };
    }, 201>>;
    /**
     * Deletes a file in a repository.
     *
     * @see {@link https://developer.github.com/v3/repos/contents/#delete-a-file}
     *
     * @param {string} owner                  - The repo's owner
     * @param {string} repo                   - The repo's name
     * @param {string} path                   - The content path
     * @param {object} body                   - The request body
     * @param {string} body.message           - Required. The commit message.
     * @param {string} body.sha               - Required. The blob SHA of the file being replaced.
     * @param {string} body.branch            - The branch name. Default: the repository’s default branch (usually master)
     * @param {object} body.committer         - The person that committed the file. Default: the authenticated user.
     * @param {string} body.committer.name    - Required. The name of the author or committer of the commit. You'll receive a 422 status code if name is omitted.
     * @param {string} body.committer.email   - Required. The email of the author or committer of the commit. You'll receive a 422 status code if email is omitted.
     * @param {object} body.author            - The author of the file. Default: The committer or the authenticated user if you omit committer.
     * @param {string} body.author.name       - Required. The name of the author or committer of the commit. You'll receive a 422 status code if name is omitted.
     * @param {string} body.author.email      - Required. The email of the author or committer of the commit. You'll receive a 422 status code if email is omitted.
     *
     * @return {object} Commit data
     */
    deleteContents: (owner: string, repo: string, path: Params, body: Body) => Promise<import("@octokit/types").OctokitResponse<{
        content: {
            name?: string;
            path?: string;
            sha?: string;
            size?: number;
            url?: string;
            html_url?: string;
            git_url?: string;
            download_url?: string;
            type?: string;
            _links?: {
                self?: string;
                git?: string;
                html?: string;
            };
        };
        commit: {
            sha?: string;
            node_id?: string;
            url?: string;
            html_url?: string;
            author?: {
                date?: string;
                name?: string;
                email?: string;
            };
            committer?: {
                date?: string;
                name?: string;
                email?: string;
            };
            message?: string;
            tree?: {
                url?: string;
                sha?: string;
            };
            parents?: {
                url?: string;
                html_url?: string;
                sha?: string;
            }[];
            verification?: {
                verified?: boolean;
                reason?: string;
                signature?: string;
                payload?: string;
            };
        };
    }, 200>>;
    /**
     * Gets a redirect URL to download an archive for a repository. The :archive_format can be either tarball or zipball. The :ref must be a valid Git reference. If you omit :ref, the repository’s default branch (usually master) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use the Location header to make a second GET request. Note: For private repositories, these links are temporary and expire after five minutes.
     *
     * @see {@link https://developer.github.com/v3/repos/contents/#get-archive-link}
     *
     * @param {string} owner           - The repo's owner
     * @param {string} repo            - The repo's name
     * @param {string} archiveFormat   - Either tarball or zipball
     * @param {string} ref             - A valid Git reference. If you omit :ref, the repository’s default branch (usually master) will be used
     *
     * @return {null} 302
     */
    getArchiveLink: (owner: string, repo: string, archiveFormat: string, ref: string) => Promise<import("@octokit/types").OctokitResponse<unknown, 302>>;
};
export default _default;
