import { Params, GetRepositoryCommentsParams } from "../types";
/**
 * @module issues/comments
 */
declare const _default: {
    /**
     * List comments on an issue
     * Issue Comments are ordered by ascending ID.
     *
     * @see {@link https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue}
     *
     * @param {string} owner       - The repo's owner
     * @param {string} repo        - The repo's name
     * @param {string} number      - The issue id
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} Comment data
     */
    getIssueComments: (owner: string, repo: string, number: number, params?: Params) => Promise<{
        id: number;
        node_id: string;
        url: string;
        body?: string;
        body_text?: string;
        body_html?: string;
        html_url: string;
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
        created_at: string;
        updated_at: string;
        issue_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        performed_via_github_app?: {
            id: number;
            slug?: string;
            node_id: string;
            owner: {
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
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                issues?: string;
                checks?: string;
                metadata?: string;
                contents?: string;
                deployments?: string;
            } & {
                [key: string]: string;
            };
            events: string[];
            installations_count?: number;
            client_id?: string;
            client_secret?: string;
            webhook_secret?: string;
            pem?: string;
        };
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
    }[]>;
    /**
     * List comments in a repository
     * By default, Issue Comments are ordered by ascending ID.
     *
     * @see {@link https://developer.github.com/v3/issues/comments/#list-comments-in-a-repository}
     *
     * @param {string} owner            - The repo's owner
     * @param {string} repo             - The repo's name
     * @param {object} params           - An object of parameters for the request
     * @param {string}    params.sort      - Either created or updated. Default: created
     * @param {string}    params.direction - Either asc or desc. Ignored without the sort parameter.
     * @param {string}    params.since     - Only comments updated at or after this time are returned. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     *
     * @return {object} Comment data
     */
    getRepositoryComments: (owner: string, repo: string, params?: GetRepositoryCommentsParams) => Promise<{
        id: number;
        node_id: string;
        url: string;
        body?: string;
        body_text?: string;
        body_html?: string;
        html_url: string;
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
        created_at: string;
        updated_at: string;
        issue_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        performed_via_github_app?: {
            id: number;
            slug?: string;
            node_id: string;
            owner: {
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
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                issues?: string;
                checks?: string;
                metadata?: string;
                contents?: string;
                deployments?: string;
            } & {
                [key: string]: string;
            };
            events: string[];
            installations_count?: number;
            client_id?: string;
            client_secret?: string;
            webhook_secret?: string;
            pem?: string;
        };
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
    }[]>;
    /**
     * Get a single comment
     *
     * @see {@link https://developer.github.com/v3/issues/comments/#get-a-single-comment}
     *
     * @param {string} owner - The repo's owner
     * @param {string} repo  - The repo's name
     * @param {string} id    - The comment id
     *
     * @return {object} Comment data
     */
    getComment: (owner: string, repo: string, id: string) => Promise<{
        id: number;
        node_id: string;
        url: string;
        body?: string;
        body_text?: string;
        body_html?: string;
        html_url: string;
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
        created_at: string;
        updated_at: string;
        issue_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        performed_via_github_app?: {
            id: number;
            slug?: string;
            node_id: string;
            owner: {
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
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                issues?: string;
                checks?: string;
                metadata?: string;
                contents?: string;
                deployments?: string;
            } & {
                [key: string]: string;
            };
            events: string[];
            installations_count?: number;
            client_id?: string;
            client_secret?: string;
            webhook_secret?: string;
            pem?: string;
        };
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
    }>;
    /**
     * Create a comment
     *
     * @see {@link https://developer.github.com/v3/issues/comments/#create-a-comment}
     *
     * @param {string} owner     - The repo's owner
     * @param {string} repo      - The repo's name
     * @param {string} number    - The issue id
     * @param {object} body      - The request body
     * @param {string} body.body - The comment text
     *
     * @return {object} Comment data
     */
    createComment: (owner: string, repo: string, number: string, body: Body) => Promise<{
        id: number;
        node_id: string;
        url: string;
        body?: string;
        body_text?: string;
        body_html?: string;
        html_url: string;
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
        created_at: string;
        updated_at: string;
        issue_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        performed_via_github_app?: {
            id: number;
            slug?: string;
            node_id: string;
            owner: {
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
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                issues?: string;
                checks?: string;
                metadata?: string;
                contents?: string;
                deployments?: string;
            } & {
                [key: string]: string;
            };
            events: string[];
            installations_count?: number;
            client_id?: string;
            client_secret?: string;
            webhook_secret?: string;
            pem?: string;
        };
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
    }>;
    /**
     * Edit a comment
     *
     * @see {@link https://developer.github.com/v3/issues/comments/#edit-a-comment}
     *
     * @param {string} owner     - The repo's owner
     * @param {string} repo      - The repo's name
     * @param {string} id        - The comment id
     * @param {object} body      - The request body
     * @param {string} body.body - The comment text
     *
     * @return {object} Comment data
     */
    editComment: (owner: string, repo: string, id: string, body: Body) => Promise<{
        id: number;
        node_id: string;
        url: string;
        body?: string;
        body_text?: string;
        body_html?: string;
        html_url: string;
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
        created_at: string;
        updated_at: string;
        issue_url: string;
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        performed_via_github_app?: {
            id: number;
            slug?: string;
            node_id: string;
            owner: {
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
            name: string;
            description: string;
            external_url: string;
            html_url: string;
            created_at: string;
            updated_at: string;
            permissions: {
                issues?: string;
                checks?: string;
                metadata?: string;
                contents?: string;
                deployments?: string;
            } & {
                [key: string]: string;
            };
            events: string[];
            installations_count?: number;
            client_id?: string;
            client_secret?: string;
            webhook_secret?: string;
            pem?: string;
        };
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
    }>;
    /**
     * Delete a comment
     *
     * @see {@link https://developer.github.com/v3/issues/comments/#delete-a-comment}
     *
     * @param {string} owner - The repo's owner
     * @param {string} repo  - The repo's name
     * @param {string} id    - The comment id
     *
     * @return {null} 204 no content
     */
    deleteComment: (owner: string, repo: string, id: string) => Promise<never>;
};
export default _default;
