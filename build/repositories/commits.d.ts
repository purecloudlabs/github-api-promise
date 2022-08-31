import { Params } from "../types";
/**
 * Commits module
 * @module repositories/commits
 */
declare const _default: {
    /**
     * List commits on a repository
     *
     * @see {@link https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository}
     *
     * @param {string} owner         - The repo's owner
     * @param {string} repo          - The repo's name
     * @param {object} params        - An object of parameters for the request
     * @param {string} params.sha    - SHA or branch to start listing commits from. Default: the repository’s default branch (usually master).
     * @param {string} params.path   - Only commits containing this file path will be returned.
     * @param {string} params.author - GitHub login or email address by which to filter by commit author.
     * @param {string} params.since  - Only commits after this date will be returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * @param {string} params.until  - Only commits before this date will be returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * @param {int}    params.page   - The page of results to retrieve
     *
     * @return {object} Commit data
     */
    getCommits: (owner: string, repo: string, params?: Params) => Promise<{
        url: string;
        sha: string;
        node_id: string;
        html_url: string;
        comments_url: string;
        commit: {
            url: string;
            author: {
                name?: string;
                email?: string;
                date?: string;
            };
            committer: {
                name?: string;
                email?: string;
                date?: string;
            };
            message: string;
            comment_count: number;
            tree: {
                sha: string;
                url: string;
            };
            verification?: {
                verified: boolean;
                reason: string;
                payload: string;
                signature: string;
            };
        };
        author: {
            name?: string;
            email?: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string;
        };
        committer: {
            name?: string;
            email?: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string;
        };
        parents: {
            sha: string;
            url: string;
            html_url?: string;
        }[];
        stats?: {
            additions?: number;
            deletions?: number;
            total?: number;
        };
        files?: {
            sha: string;
            filename: string;
            status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
            additions: number;
            deletions: number;
            changes: number;
            blob_url: string;
            raw_url: string;
            contents_url: string;
            patch?: string;
            previous_filename?: string;
        }[];
    }[]>;
    /**
     * Get a single commit
     *
     * @see {@link https://developer.github.com/v3/repos/commits/#get-a-single-commit}
     *
     * @param {string} owner - The repo's owner
     * @param {string} repo  - The repo's name
     * @param {string} sha   - The commit's sha
     *
     * @return {object} Commit data
     */
    getCommit: (owner: string, repo: string, sha: string) => Promise<{
        url: string;
        sha: string;
        node_id: string;
        html_url: string;
        comments_url: string;
        commit: {
            url: string;
            author: {
                name?: string;
                email?: string;
                date?: string;
            };
            committer: {
                name?: string;
                email?: string;
                date?: string;
            };
            message: string;
            comment_count: number;
            tree: {
                sha: string;
                url: string;
            };
            verification?: {
                verified: boolean;
                reason: string;
                payload: string;
                signature: string;
            };
        };
        author: {
            name?: string;
            email?: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string;
        };
        committer: {
            name?: string;
            email?: string;
            login: string;
            id: number;
            node_id: string;
            avatar_url: string;
            gravatar_id: string;
            url: string;
            html_url: string;
            followers_url: string;
            following_url: string;
            gists_url: string;
            starred_url: string;
            subscriptions_url: string;
            organizations_url: string;
            repos_url: string;
            events_url: string;
            received_events_url: string;
            type: string;
            site_admin: boolean;
            starred_at?: string;
        };
        parents: {
            sha: string;
            url: string;
            html_url?: string;
        }[];
        stats?: {
            additions?: number;
            deletions?: number;
            total?: number;
        };
        files?: {
            sha: string;
            filename: string;
            status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
            additions: number;
            deletions: number;
            changes: number;
            blob_url: string;
            raw_url: string;
            contents_url: string;
            patch?: string;
            previous_filename?: string;
        }[];
    }>;
    /**
     * ***NOT IMPLEMENTED***
     * Get the SHA-1 of a commit reference
     * Users with read access can get the SHA-1 of a commit reference
     *
     * @see {@link https://developer.github.com/v3/repos/commits/#get-the-sha-1-of-a-commit-reference}
     *
     * @param {string} owner - The repo's owner
     * @param {string} repo  - The repo's name
     * @param {string} ref   - The commit's reference
     *
     * @return {string} SHA-1 value
     */
    getSha1: (owner: string, repo: string, ref: string) => never;
    /**
     * Compare two commits
     * Both :base and :head must be branch names in :repo. To compare branches across other repositories in the same network as :repo, use the format <USERNAME>:branch. For example: base=hubot:branchname, head=octocat:branchname
     *
     * @see {@link https://developer.github.com/v3/repos/commits/#compare-two-commits}
     *
     * @param {string} owner - The repo's owner
     * @param {string} repo  - The repo's name
     * @param {string} base  - The branch to be used as the basis for comparison
     * @param {string} head  - The branch to compare against :base
     *
     * @return {object} comparison data
     */
    compareCommits: (owner: string, repo: string, base: string, head: string) => Promise<{
        url: string;
        html_url: string;
        permalink_url: string;
        diff_url: string;
        patch_url: string;
        base_commit: {
            url: string;
            sha: string;
            node_id: string;
            html_url: string;
            comments_url: string;
            commit: {
                url: string;
                author: {
                    name?: string;
                    email?: string;
                    date?: string;
                };
                committer: {
                    name?: string;
                    email?: string;
                    date?: string;
                };
                message: string;
                comment_count: number;
                tree: {
                    sha: string;
                    url: string;
                };
                verification?: {
                    verified: boolean;
                    reason: string;
                    payload: string;
                    signature: string;
                };
            };
            author: {
                name?: string;
                email?: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at?: string;
            };
            committer: {
                name?: string;
                email?: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at?: string;
            };
            parents: {
                sha: string;
                url: string;
                html_url?: string;
            }[];
            stats?: {
                additions?: number;
                deletions?: number;
                total?: number;
            };
            files?: {
                sha: string;
                filename: string;
                status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
                additions: number;
                deletions: number;
                changes: number;
                blob_url: string;
                raw_url: string;
                contents_url: string;
                patch?: string;
                previous_filename?: string;
            }[];
        };
        merge_base_commit: {
            url: string;
            sha: string;
            node_id: string;
            html_url: string;
            comments_url: string;
            commit: {
                url: string;
                author: {
                    name?: string;
                    email?: string;
                    date?: string;
                };
                committer: {
                    name?: string;
                    email?: string;
                    date?: string;
                };
                message: string;
                comment_count: number;
                tree: {
                    sha: string;
                    url: string;
                };
                verification?: {
                    verified: boolean;
                    reason: string;
                    payload: string;
                    signature: string;
                };
            };
            author: {
                name?: string;
                email?: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at?: string;
            };
            committer: {
                name?: string;
                email?: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at?: string;
            };
            parents: {
                sha: string;
                url: string;
                html_url?: string;
            }[];
            stats?: {
                additions?: number;
                deletions?: number;
                total?: number;
            };
            files?: {
                sha: string;
                filename: string;
                status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
                additions: number;
                deletions: number;
                changes: number;
                blob_url: string;
                raw_url: string;
                contents_url: string;
                patch?: string;
                previous_filename?: string;
            }[];
        };
        status: "diverged" | "ahead" | "behind" | "identical";
        ahead_by: number;
        behind_by: number;
        total_commits: number;
        commits: {
            url: string;
            sha: string;
            node_id: string;
            html_url: string;
            comments_url: string;
            commit: {
                url: string;
                author: {
                    name?: string;
                    email?: string;
                    date?: string;
                };
                committer: {
                    name?: string;
                    email?: string;
                    date?: string;
                };
                message: string;
                comment_count: number;
                tree: {
                    sha: string;
                    url: string;
                };
                verification?: {
                    verified: boolean;
                    reason: string;
                    payload: string;
                    signature: string;
                };
            };
            author: {
                name?: string;
                email?: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at?: string;
            };
            committer: {
                name?: string;
                email?: string;
                login: string;
                id: number;
                node_id: string;
                avatar_url: string;
                gravatar_id: string;
                url: string;
                html_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                starred_url: string;
                subscriptions_url: string;
                organizations_url: string;
                repos_url: string;
                events_url: string;
                received_events_url: string;
                type: string;
                site_admin: boolean;
                starred_at?: string;
            };
            parents: {
                sha: string;
                url: string;
                html_url?: string;
            }[];
            stats?: {
                additions?: number;
                deletions?: number;
                total?: number;
            };
            files?: {
                sha: string;
                filename: string;
                status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
                additions: number;
                deletions: number;
                changes: number;
                blob_url: string;
                raw_url: string;
                contents_url: string;
                patch?: string;
                previous_filename?: string;
            }[];
        }[];
        files?: {
            sha: string;
            filename: string;
            status: "added" | "removed" | "modified" | "renamed" | "copied" | "changed" | "unchanged";
            additions: number;
            deletions: number;
            changes: number;
            blob_url: string;
            raw_url: string;
            contents_url: string;
            patch?: string;
            previous_filename?: string;
        }[];
    }>;
    /**
     * Commit signature verification
     *
     * @see {@link https://developer.github.com/v3/repos/commits/#commit-signature-verification}
     *
     * @param {string} owner - The repo's owner
     * @param {string} repo  - The repo's name
     * @param {string} sha   - The commit's sha
     *
     * @return {object} Commit data
     */
    verifySignature: (owner: string, repo: string, sha: string) => Promise<{
        sha: string;
        node_id: string;
        url: string;
        author: {
            date: string;
            email: string;
            name: string;
        };
        committer: {
            date: string;
            email: string;
            name: string;
        };
        message: string;
        tree: {
            sha: string;
            url: string;
        };
        parents: {
            sha: string;
            url: string;
            html_url: string;
        }[];
        verification: {
            verified: boolean;
            reason: string;
            signature: string;
            payload: string;
        };
        html_url: string;
    }>;
};
export default _default;
