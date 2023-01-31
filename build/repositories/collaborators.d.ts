import { Params, RepoCollaboratorsParams } from "../types";
/**
 * Collaborators module
 * @module repositories/collaborators
 */
declare const _default: {
    /**
     * List collaborators
     *
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * If you pass the hellcat-preview media type, team members will include the members of child teams.
     *
     * @see {@link https://developer.github.com/v3/repos/collaborators/#list-collaborators}
     *
     * @param {string} owner              - The repo's owner
     * @param {string} repo               - The repo's name
     * @param {object} params             - An object of parameters for the request
     * @param {string} params.affiliation - Filter collaborators returned by their affiliation. Can be one of: "outside": All outside collaborators of an organization-owned repository; "direct": All collaborators with permissions to an organization-owned repository, regardless of organization membership status; "all": All collaborators the authenticated user can see; "Default": all
     * @param {int}    params.page        - The page of results to retrieve
     *
     * @return {object} Collaborator data
     */
    getCollaborators: (owner: string, repo: string, params?: RepoCollaboratorsParams) => Promise<{
        login: string;
        id: number;
        email?: string;
        name?: string;
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
        permissions?: {
            pull: boolean;
            triage?: boolean;
            push: boolean;
            maintain?: boolean;
            admin: boolean;
        };
        role_name: string;
    }[]>;
    /**
     * Check if a user is a collaborator
     *
     * For organization-owned repositories, the list of collaborators includes outside collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
     *
     * If you pass the hellcat-preview media type, team members will include the members of child teams.
     *
     * Returns 204 if user is a collaborator, otherwise returns 404.
     *
     * @see {@link https://developer.github.com/v3/repos/collaborators/#check-if-a-user-is-a-collaborator}
     *
     * @param {string} owner    - The repo's owner
     * @param {string} repo     - The repo's name
     * @param {string} username - The username to check
     *
     * @return {null} Returns 204 if user is a collaborator, otherwise returns 404.
     */
    getUserIsCollaborator: (owner: string, repo: string, username: string) => Promise<never>;
    /**
     * Review a user's permission level
     *
     * Possible values for the permission key: admin, write, read, none.
     *
     * @see {@link https://developer.github.com/v3/repos/collaborators/#review-a-users-permission-level}
     *
     * @param {string} owner    - The repo's owner
     * @param {string} repo     - The repo's name
     * @param {string} username - The username to check
     *
     * @return {object} Collaborator data
     */
    getUserPermissionLevel: (owner: string, repo: string, username: string) => Promise<{
        permission: string;
        role_name: string;
        user: {
            login: string;
            id: number;
            email?: string;
            name?: string;
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
            permissions?: {
                pull: boolean;
                triage?: boolean;
                push: boolean;
                maintain?: boolean;
                admin: boolean;
            };
            role_name: string;
        };
    }>;
    /**
     * Add user as a collaborator
     *
     * Note that, if you choose not to pass any parameters, you'll need to set Content-Length to zero when calling out to this endpoint. For more information, see "HTTP verbs."
     *
     * To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
     *
     * Returns 201 with data or 204
     *
     * @see {@link https://developer.github.com/v3/repos/collaborators/#add-user-as-a-collaborator}
     *
     * @param {string} owner             - The repo's owner
     * @param {string} repo              - The repo's name
     * @param {string} username          - The username to check
     * @param {object} params            - An object of parameters for the request
     * @param {int}    params.permission - The permission to grant the collaborator. Only valid on organization-owned repositories. Can be one of: "pull" - can pull, but not push to or administer this repository; "push" - can pull and push, but not administer this repository; "admin" - can pull, push and administer this repository
     *
     * @return {null} Returns 201 with data or 204
     */
    putUserCollaborator: (owner: string, repo: string, username: string, params?: Params) => Promise<{
        id: number;
        repository: {
            id: number;
            node_id: string;
            name: string;
            full_name: string;
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
            private: boolean;
            html_url: string;
            description: string;
            fork: boolean;
            url: string;
            archive_url: string;
            assignees_url: string;
            blobs_url: string;
            branches_url: string;
            collaborators_url: string;
            comments_url: string;
            commits_url: string;
            compare_url: string;
            contents_url: string;
            contributors_url: string;
            deployments_url: string;
            downloads_url: string;
            events_url: string;
            forks_url: string;
            git_commits_url: string;
            git_refs_url: string;
            git_tags_url: string;
            git_url?: string;
            issue_comment_url: string;
            issue_events_url: string;
            issues_url: string;
            keys_url: string;
            labels_url: string;
            languages_url: string;
            merges_url: string;
            milestones_url: string;
            notifications_url: string;
            pulls_url: string;
            releases_url: string;
            ssh_url?: string;
            stargazers_url: string;
            statuses_url: string;
            subscribers_url: string;
            subscription_url: string;
            tags_url: string;
            teams_url: string;
            trees_url: string;
            clone_url?: string;
            mirror_url?: string;
            hooks_url: string;
            svn_url?: string;
            homepage?: string;
            language?: string;
            forks_count?: number;
            stargazers_count?: number;
            watchers_count?: number;
            size?: number;
            default_branch?: string;
            open_issues_count?: number;
            is_template?: boolean;
            topics?: string[];
            has_issues?: boolean;
            has_projects?: boolean;
            has_wiki?: boolean;
            has_pages?: boolean;
            has_downloads?: boolean;
            has_discussions?: boolean;
            archived?: boolean;
            disabled?: boolean;
            visibility?: string;
            pushed_at?: string;
            created_at?: string;
            updated_at?: string;
            permissions?: {
                admin?: boolean;
                maintain?: boolean;
                push?: boolean;
                triage?: boolean;
                pull?: boolean;
            };
            role_name?: string;
            temp_clone_token?: string;
            delete_branch_on_merge?: boolean;
            subscribers_count?: number;
            network_count?: number;
            code_of_conduct?: {
                key: string;
                name: string;
                url: string;
                body?: string;
                html_url: string;
            };
            license?: {
                key?: string;
                name?: string;
                spdx_id?: string;
                url?: string;
                node_id?: string;
            };
            forks?: number;
            open_issues?: number;
            watchers?: number;
            allow_forking?: boolean;
            web_commit_signoff_required?: boolean;
            security_and_analysis?: {
                advanced_security?: {
                    status?: "enabled" | "disabled";
                };
                secret_scanning?: {
                    status?: "enabled" | "disabled";
                };
                secret_scanning_push_protection?: {
                    status?: "enabled" | "disabled";
                };
            };
        };
        invitee: {
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
        inviter: {
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
        permissions: "read" | "write" | "admin" | "triage" | "maintain";
        created_at: string;
        expired?: boolean;
        url: string;
        html_url: string;
        node_id: string;
    }>;
    /**
     * Remove user as a collaborator
     *
     * @see {@link https://developer.github.com/v3/repos/collaborators/#remove-user-as-a-collaborator}
     *
     * @param {string} owner              - The repo's owner
     * @param {string} repo               - The repo's name
     * @param {string} username          - The username to check
     *
     * @return {object} Collaborator data
     */
    deleteUserCollaborator: (owner: string, repo: string, username: string) => Promise<never>;
};
export default _default;
