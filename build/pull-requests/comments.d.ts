import { PullRequestCommentParams, PullRequestCommentBody, Body } from "../types";
/**
 * Comments module
 * @module pullRequests/comments
 */
declare const _default: {
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
    getPullRequestComments: (owner: string, repo: string, number: string, params?: PullRequestCommentParams) => Promise<{
        url: string;
        pull_request_review_id: number;
        id: number;
        node_id: string;
        diff_hunk: string;
        path: string;
        position: number;
        original_position: number;
        commit_id: string;
        original_commit_id: string;
        in_reply_to_id?: number;
        user: {
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
        body: string;
        created_at: string;
        updated_at: string;
        html_url: string;
        pull_request_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        _links: {
            self: {
                href: string;
            };
            html: {
                href: string;
            };
            pull_request: {
                href: string;
            };
        };
        start_line?: number;
        original_start_line?: number;
        start_side?: "LEFT" | "RIGHT";
        line?: number;
        original_line?: number;
        side?: "LEFT" | "RIGHT";
        reactions?: {
            url: string;
            total_count: number;
            "+1": number;
            "-1": number;
            laugh: number;
            confused: number;
            heart: number;
            hooray: number;
            eyes: number;
            rocket: number;
        };
        body_html?: string;
        body_text?: string;
    }[]>;
    /**
     * List comments in a repository
     * By default, review comments are ordered by ascending ID.
     *
     * @see {@link https://developer.github.com/v3/pulls/comments/#list-comments-in-a-repository}
     *
     * @param {string} owner            - The repo's owner
     * @param {string} repo             - The repo's name
     * @param {object} params           - An object of parameters for the request
     * @param {string} params.sort      - Can be either created or updated comments. Default: created
     * @param {string} params.direction - Can be either asc or desc. Ignored without sort parameter.
     * @param {string} params.since     - This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only returns comments updated at or after this time.
     * @param {int}    params.page      - The page of results to retrieve
     *
     * @return {object} Pull request comment data
     */
    getRepositoryComments: (owner: string, repo: string, params?: PullRequestCommentParams) => Promise<{
        url: string;
        pull_request_review_id: number;
        id: number;
        node_id: string;
        diff_hunk: string;
        path: string;
        position: number;
        original_position: number;
        commit_id: string;
        original_commit_id: string;
        in_reply_to_id?: number;
        user: {
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
        body: string;
        created_at: string;
        updated_at: string;
        html_url: string;
        pull_request_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        _links: {
            self: {
                href: string;
            };
            html: {
                href: string;
            };
            pull_request: {
                href: string;
            };
        };
        start_line?: number;
        original_start_line?: number;
        start_side?: "LEFT" | "RIGHT";
        line?: number;
        original_line?: number;
        side?: "LEFT" | "RIGHT";
        reactions?: {
            url: string;
            total_count: number;
            "+1": number;
            "-1": number;
            laugh: number;
            confused: number;
            heart: number;
            hooray: number;
            eyes: number;
            rocket: number;
        };
        body_html?: string;
        body_text?: string;
    }[]>;
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
    getComment: (owner: string, repo: string, id: string) => Promise<{
        url: string;
        pull_request_review_id: number;
        id: number;
        node_id: string;
        diff_hunk: string;
        path: string;
        position: number;
        original_position: number;
        commit_id: string;
        original_commit_id: string;
        in_reply_to_id?: number;
        user: {
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
        body: string;
        created_at: string;
        updated_at: string;
        html_url: string;
        pull_request_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        _links: {
            self: {
                href: string;
            };
            html: {
                href: string;
            };
            pull_request: {
                href: string;
            };
        };
        start_line?: number;
        original_start_line?: number;
        start_side?: "LEFT" | "RIGHT";
        line?: number;
        original_line?: number;
        side?: "LEFT" | "RIGHT";
        reactions?: {
            url: string;
            total_count: number;
            "+1": number;
            "-1": number;
            laugh: number;
            confused: number;
            heart: number;
            hooray: number;
            eyes: number;
            rocket: number;
        };
        body_html?: string;
        body_text?: string;
    }>;
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
    createComment: (owner: string, repo: string, number: string, body: PullRequestCommentBody) => Promise<{
        url: string;
        pull_request_review_id: number;
        id: number;
        node_id: string;
        diff_hunk: string;
        path: string;
        position: number;
        original_position: number;
        commit_id: string;
        original_commit_id: string;
        in_reply_to_id?: number;
        user: {
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
        body: string;
        created_at: string;
        updated_at: string;
        html_url: string;
        pull_request_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        _links: {
            self: {
                href: string;
            };
            html: {
                href: string;
            };
            pull_request: {
                href: string;
            };
        };
        start_line?: number;
        original_start_line?: number;
        start_side?: "LEFT" | "RIGHT";
        line?: number;
        original_line?: number;
        side?: "LEFT" | "RIGHT";
        reactions?: {
            url: string;
            total_count: number;
            "+1": number;
            "-1": number;
            laugh: number;
            confused: number;
            heart: number;
            hooray: number;
            eyes: number;
            rocket: number;
        };
        body_html?: string;
        body_text?: string;
    }>;
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
    editComment: (owner: string, repo: string, id: string, body: Body) => Promise<{
        url: string;
        pull_request_review_id: number;
        id: number;
        node_id: string;
        diff_hunk: string;
        path: string;
        position: number;
        original_position: number;
        commit_id: string;
        original_commit_id: string;
        in_reply_to_id?: number;
        user: {
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
        body: string;
        created_at: string;
        updated_at: string;
        html_url: string;
        pull_request_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        _links: {
            self: {
                href: string;
            };
            html: {
                href: string;
            };
            pull_request: {
                href: string;
            };
        };
        start_line?: number;
        original_start_line?: number;
        start_side?: "LEFT" | "RIGHT";
        line?: number;
        original_line?: number;
        side?: "LEFT" | "RIGHT";
        reactions?: {
            url: string;
            total_count: number;
            "+1": number;
            "-1": number;
            laugh: number;
            confused: number;
            heart: number;
            hooray: number;
            eyes: number;
            rocket: number;
        };
        body_html?: string;
        body_text?: string;
    }>;
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
    deleteComment: (owner: string, repo: string, id: string) => Promise<never>;
};
export default _default;
