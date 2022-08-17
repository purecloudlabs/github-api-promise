import { Params, PullRequestBody, PullRequestParams } from "../types";
/**
 * Pull Requests module
 * @module pullRequests/pullRequests
 */
declare const _default: {
    /**
     * List pull requests
     *
     * @see {@link https://developer.github.com/v3/pulls#list-pull-requests}
     *
     * @param {string} owner            - The repo's owner
     * @param {string} repo             - The repo's name
     * @param {object} params           - An object of parameters for the request
     * @param {string} params.state     - Either open, closed, or all to filter by state. Default: open
     * @param {string} params.head      - Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
     * @param {string} params.base      - Filter pulls by base branch name. Example: gh-pages.
     * @param {string} params.sort      - What to sort results by. Can be either created, updated, popularity (comment count) or long-running (age, filtering by pulls updated in the last month). Default: created
     * @param {string} params.direction - The direction of the sort. Can be either asc or desc. Default: desc when sort is created or sort is not specified, otherwise asc.
     * @param {int}    params.page      - The page of results to retrieve
     *
     * @return {object} Pull request data
     */
    getPullRequests: (owner: string, repo: string, params?: PullRequestParams) => Promise<import("@octokit/types").OctokitResponse<{
        url: string;
        id: number;
        node_id: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        issue_url: string;
        commits_url: string;
        review_comments_url: string;
        review_comment_url: string;
        comments_url: string;
        statuses_url: string;
        number: number;
        state: string;
        locked: boolean;
        title: string;
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
        labels: {
            id: number;
            node_id: string;
            url: string;
            name: string;
            description: string;
            color: string;
            default: boolean;
        }[];
        milestone: {
            url: string;
            html_url: string;
            labels_url: string;
            id: number;
            node_id: string;
            number: number;
            state: "open" | "closed";
            title: string;
            description: string;
            creator: {
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
            open_issues: number;
            closed_issues: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            due_on: string;
        };
        active_lock_reason?: string;
        created_at: string;
        updated_at: string;
        closed_at: string;
        merged_at: string;
        merge_commit_sha: string;
        assignee: {
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
        assignees?: {
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
        }[];
        requested_reviewers?: {
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
        }[];
        requested_teams?: {
            id: number;
            node_id: string;
            name: string;
            slug: string;
            description: string;
            privacy?: string;
            permission: string;
            permissions?: {
                pull: boolean;
                triage: boolean;
                push: boolean;
                maintain: boolean;
                admin: boolean;
            };
            url: string;
            html_url: string;
            members_url: string;
            repositories_url: string;
            parent: {
                id: number;
                node_id: string;
                url: string;
                members_url: string;
                name: string;
                description: string;
                permission: string;
                privacy?: string;
                html_url: string;
                repositories_url: string;
                slug: string;
                ldap_dn?: string;
            };
        }[];
        head: {
            label: string;
            ref: string;
            repo: {
                id: number;
                node_id: string;
                name: string;
                full_name: string;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                    html_url?: string;
                };
                organization?: {
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
                forks: number;
                permissions?: {
                    admin: boolean;
                    pull: boolean;
                    triage?: boolean;
                    push: boolean;
                    maintain?: boolean;
                };
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
                git_url: string;
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
                ssh_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                clone_url: string;
                mirror_url: string;
                hooks_url: string;
                svn_url: string;
                homepage: string;
                language: string;
                forks_count: number;
                stargazers_count: number;
                watchers_count: number;
                size: number;
                default_branch: string;
                open_issues_count: number;
                is_template?: boolean;
                topics?: string[];
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                has_downloads: boolean;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                pushed_at: string;
                created_at: string;
                updated_at: string;
                allow_rebase_merge?: boolean;
                template_repository?: {
                    id?: number;
                    node_id?: string;
                    name?: string;
                    full_name?: string;
                    owner?: {
                        login?: string;
                        id?: number;
                        node_id?: string;
                        avatar_url?: string;
                        gravatar_id?: string;
                        url?: string;
                        html_url?: string;
                        followers_url?: string;
                        following_url?: string;
                        gists_url?: string;
                        starred_url?: string;
                        subscriptions_url?: string;
                        organizations_url?: string;
                        repos_url?: string;
                        events_url?: string;
                        received_events_url?: string;
                        type?: string;
                        site_admin?: boolean;
                    };
                    private?: boolean;
                    html_url?: string;
                    description?: string;
                    fork?: boolean;
                    url?: string;
                    archive_url?: string;
                    assignees_url?: string;
                    blobs_url?: string;
                    branches_url?: string;
                    collaborators_url?: string;
                    comments_url?: string;
                    commits_url?: string;
                    compare_url?: string;
                    contents_url?: string;
                    contributors_url?: string;
                    deployments_url?: string;
                    downloads_url?: string;
                    events_url?: string;
                    forks_url?: string;
                    git_commits_url?: string;
                    git_refs_url?: string;
                    git_tags_url?: string;
                    git_url?: string;
                    issue_comment_url?: string;
                    issue_events_url?: string;
                    issues_url?: string;
                    keys_url?: string;
                    labels_url?: string;
                    languages_url?: string;
                    merges_url?: string;
                    milestones_url?: string;
                    notifications_url?: string;
                    pulls_url?: string;
                    releases_url?: string;
                    ssh_url?: string;
                    stargazers_url?: string;
                    statuses_url?: string;
                    subscribers_url?: string;
                    subscription_url?: string;
                    tags_url?: string;
                    teams_url?: string;
                    trees_url?: string;
                    clone_url?: string;
                    mirror_url?: string;
                    hooks_url?: string;
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
                    allow_rebase_merge?: boolean;
                    temp_clone_token?: string;
                    allow_squash_merge?: boolean;
                    allow_auto_merge?: boolean;
                    delete_branch_on_merge?: boolean;
                    allow_update_branch?: boolean;
                    use_squash_pr_title_as_default?: boolean;
                    allow_merge_commit?: boolean;
                    subscribers_count?: number;
                    network_count?: number;
                };
                temp_clone_token?: string;
                allow_squash_merge?: boolean;
                allow_auto_merge?: boolean;
                delete_branch_on_merge?: boolean;
                allow_update_branch?: boolean;
                use_squash_pr_title_as_default?: boolean;
                allow_merge_commit?: boolean;
                allow_forking?: boolean;
                subscribers_count?: number;
                network_count?: number;
                open_issues: number;
                watchers: number;
                master_branch?: string;
                starred_at?: string;
            };
            sha: string;
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
        };
        base: {
            label: string;
            ref: string;
            repo: {
                id: number;
                node_id: string;
                name: string;
                full_name: string;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                    html_url?: string;
                };
                organization?: {
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
                forks: number;
                permissions?: {
                    admin: boolean;
                    pull: boolean;
                    triage?: boolean;
                    push: boolean;
                    maintain?: boolean;
                };
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
                git_url: string;
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
                ssh_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                clone_url: string;
                mirror_url: string;
                hooks_url: string;
                svn_url: string;
                homepage: string;
                language: string;
                forks_count: number;
                stargazers_count: number;
                watchers_count: number;
                size: number;
                default_branch: string;
                open_issues_count: number;
                is_template?: boolean;
                topics?: string[];
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                has_downloads: boolean;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                pushed_at: string;
                created_at: string;
                updated_at: string;
                allow_rebase_merge?: boolean;
                template_repository?: {
                    id?: number;
                    node_id?: string;
                    name?: string;
                    full_name?: string;
                    owner?: {
                        login?: string;
                        id?: number;
                        node_id?: string;
                        avatar_url?: string;
                        gravatar_id?: string;
                        url?: string;
                        html_url?: string;
                        followers_url?: string;
                        following_url?: string;
                        gists_url?: string;
                        starred_url?: string;
                        subscriptions_url?: string;
                        organizations_url?: string;
                        repos_url?: string;
                        events_url?: string;
                        received_events_url?: string;
                        type?: string;
                        site_admin?: boolean;
                    };
                    private?: boolean;
                    html_url?: string;
                    description?: string;
                    fork?: boolean;
                    url?: string;
                    archive_url?: string;
                    assignees_url?: string;
                    blobs_url?: string;
                    branches_url?: string;
                    collaborators_url?: string;
                    comments_url?: string;
                    commits_url?: string;
                    compare_url?: string;
                    contents_url?: string;
                    contributors_url?: string;
                    deployments_url?: string;
                    downloads_url?: string;
                    events_url?: string;
                    forks_url?: string;
                    git_commits_url?: string;
                    git_refs_url?: string;
                    git_tags_url?: string;
                    git_url?: string;
                    issue_comment_url?: string;
                    issue_events_url?: string;
                    issues_url?: string;
                    keys_url?: string;
                    labels_url?: string;
                    languages_url?: string;
                    merges_url?: string;
                    milestones_url?: string;
                    notifications_url?: string;
                    pulls_url?: string;
                    releases_url?: string;
                    ssh_url?: string;
                    stargazers_url?: string;
                    statuses_url?: string;
                    subscribers_url?: string;
                    subscription_url?: string;
                    tags_url?: string;
                    teams_url?: string;
                    trees_url?: string;
                    clone_url?: string;
                    mirror_url?: string;
                    hooks_url?: string;
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
                    allow_rebase_merge?: boolean;
                    temp_clone_token?: string;
                    allow_squash_merge?: boolean;
                    allow_auto_merge?: boolean;
                    delete_branch_on_merge?: boolean;
                    allow_update_branch?: boolean;
                    use_squash_pr_title_as_default?: boolean;
                    allow_merge_commit?: boolean;
                    subscribers_count?: number;
                    network_count?: number;
                };
                temp_clone_token?: string;
                allow_squash_merge?: boolean;
                allow_auto_merge?: boolean;
                delete_branch_on_merge?: boolean;
                allow_update_branch?: boolean;
                use_squash_pr_title_as_default?: boolean;
                allow_merge_commit?: boolean;
                allow_forking?: boolean;
                subscribers_count?: number;
                network_count?: number;
                open_issues: number;
                watchers: number;
                master_branch?: string;
                starred_at?: string;
            };
            sha: string;
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
        };
        _links: {
            comments: {
                href: string;
            };
            commits: {
                href: string;
            };
            statuses: {
                href: string;
            };
            html: {
                href: string;
            };
            issue: {
                href: string;
            };
            review_comments: {
                href: string;
            };
            review_comment: {
                href: string;
            };
            self: {
                href: string;
            };
        };
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        auto_merge: {
            enabled_by: {
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
            merge_method: "merge" | "squash" | "rebase";
            commit_title: string;
            commit_message: string;
        };
        draft?: boolean;
    }[], 200>>;
    /**
     * Get a single pull request
     *
     * @see {@link https://developer.github.com/v3/pulls#get-a-single-pull-request}
     *
     * @param {string} owner  - The repo's owner
     * @param {string} repo   - The repo's name
     * @param {string} number - The pull request number
     *
     * @return {object} Pull request data
     */
    getPullRequest: (owner: string, repo: string, number: string) => Promise<import("@octokit/types").OctokitResponse<{
        url: string;
        id: number;
        node_id: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        issue_url: string;
        commits_url: string;
        review_comments_url: string;
        review_comment_url: string;
        comments_url: string;
        statuses_url: string;
        number: number;
        state: "open" | "closed";
        locked: boolean;
        title: string;
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
        labels: {
            id: number;
            node_id: string;
            url: string;
            name: string;
            description: string;
            color: string;
            default: boolean;
        }[];
        milestone: {
            url: string;
            html_url: string;
            labels_url: string;
            id: number;
            node_id: string;
            number: number;
            state: "open" | "closed";
            title: string;
            description: string;
            creator: {
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
            open_issues: number;
            closed_issues: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            due_on: string;
        };
        active_lock_reason?: string;
        created_at: string;
        updated_at: string;
        closed_at: string;
        merged_at: string;
        merge_commit_sha: string;
        assignee: {
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
        assignees?: {
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
        }[];
        requested_reviewers?: {
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
        }[];
        requested_teams?: {
            id: number;
            node_id: string;
            url: string;
            members_url: string;
            name: string;
            description: string;
            permission: string;
            privacy?: string;
            html_url: string;
            repositories_url: string;
            slug: string;
            ldap_dn?: string;
        }[];
        head: {
            label: string;
            ref: string;
            repo: {
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
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                node_id: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    login: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
                clone_url: string;
                default_branch: string;
                forks: number;
                forks_count: number;
                git_url: string;
                has_downloads: boolean;
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                homepage: string;
                language: string;
                master_branch?: string;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                mirror_url: string;
                open_issues: number;
                open_issues_count: number;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    push: boolean;
                    triage?: boolean;
                    pull: boolean;
                };
                temp_clone_token?: string;
                allow_merge_commit?: boolean;
                allow_squash_merge?: boolean;
                allow_rebase_merge?: boolean;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                };
                pushed_at: string;
                size: number;
                ssh_url: string;
                stargazers_count: number;
                svn_url: string;
                topics?: string[];
                watchers: number;
                watchers_count: number;
                created_at: string;
                updated_at: string;
                allow_forking?: boolean;
                is_template?: boolean;
            };
            sha: string;
            user: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        };
        base: {
            label: string;
            ref: string;
            repo: {
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
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                is_template?: boolean;
                node_id: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    login: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
                clone_url: string;
                default_branch: string;
                forks: number;
                forks_count: number;
                git_url: string;
                has_downloads: boolean;
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                homepage: string;
                language: string;
                master_branch?: string;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                mirror_url: string;
                open_issues: number;
                open_issues_count: number;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    push: boolean;
                    triage?: boolean;
                    pull: boolean;
                };
                temp_clone_token?: string;
                allow_merge_commit?: boolean;
                allow_squash_merge?: boolean;
                allow_rebase_merge?: boolean;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                    html_url?: string;
                };
                pushed_at: string;
                size: number;
                ssh_url: string;
                stargazers_count: number;
                svn_url: string;
                topics?: string[];
                watchers: number;
                watchers_count: number;
                created_at: string;
                updated_at: string;
                allow_forking?: boolean;
            };
            sha: string;
            user: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        };
        _links: {
            comments: {
                href: string;
            };
            commits: {
                href: string;
            };
            statuses: {
                href: string;
            };
            html: {
                href: string;
            };
            issue: {
                href: string;
            };
            review_comments: {
                href: string;
            };
            review_comment: {
                href: string;
            };
            self: {
                href: string;
            };
        };
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        auto_merge: {
            enabled_by: {
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
            merge_method: "merge" | "squash" | "rebase";
            commit_title: string;
            commit_message: string;
        };
        draft?: boolean;
        merged: boolean;
        mergeable: boolean;
        rebaseable?: boolean;
        mergeable_state: string;
        merged_by: {
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
        comments: number;
        review_comments: number;
        maintainer_can_modify: boolean;
        commits: number;
        additions: number;
        deletions: number;
        changed_files: number;
    }, 200>>;
    /**
     * Create a pull request
     *
     * @see {@link https://developer.github.com/v3/pulls#create-a-pull-request}
     *
     * @param {string}  owner                      - The repo's owner
     * @param {string}  repo                       - The repo's name
     * @param {object}  body                       - The request body
     * @param {string}  body.title                 - Required. The title of the pull request.
     * @param {string}  body.head                  - Required. The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
     * @param {string}  body.base                  - Required. The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
     * @param {string}  body.body                  - The contents of the pull request.
     * @param {boolean} body.maintainer_can_modify - Indicates whether maintainers can modify the pull request.
     *
     * @return {object} Pull request data
     */
    createPullRequest: (owner: string, repo: string, body: PullRequestBody) => Promise<import("@octokit/types").OctokitResponse<{
        url: string;
        id: number;
        node_id: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        issue_url: string;
        commits_url: string;
        review_comments_url: string;
        review_comment_url: string;
        comments_url: string;
        statuses_url: string;
        number: number;
        state: "open" | "closed";
        locked: boolean;
        title: string;
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
        labels: {
            id: number;
            node_id: string;
            url: string;
            name: string;
            description: string;
            color: string;
            default: boolean;
        }[];
        milestone: {
            url: string;
            html_url: string;
            labels_url: string;
            id: number;
            node_id: string;
            number: number;
            state: "open" | "closed";
            title: string;
            description: string;
            creator: {
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
            open_issues: number;
            closed_issues: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            due_on: string;
        };
        active_lock_reason?: string;
        created_at: string;
        updated_at: string;
        closed_at: string;
        merged_at: string;
        merge_commit_sha: string;
        assignee: {
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
        assignees?: {
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
        }[];
        requested_reviewers?: {
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
        }[];
        requested_teams?: {
            id: number;
            node_id: string;
            url: string;
            members_url: string;
            name: string;
            description: string;
            permission: string;
            privacy?: string;
            html_url: string;
            repositories_url: string;
            slug: string;
            ldap_dn?: string;
        }[];
        head: {
            label: string;
            ref: string;
            repo: {
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
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                node_id: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    login: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
                clone_url: string;
                default_branch: string;
                forks: number;
                forks_count: number;
                git_url: string;
                has_downloads: boolean;
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                homepage: string;
                language: string;
                master_branch?: string;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                mirror_url: string;
                open_issues: number;
                open_issues_count: number;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    push: boolean;
                    triage?: boolean;
                    pull: boolean;
                };
                temp_clone_token?: string;
                allow_merge_commit?: boolean;
                allow_squash_merge?: boolean;
                allow_rebase_merge?: boolean;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                };
                pushed_at: string;
                size: number;
                ssh_url: string;
                stargazers_count: number;
                svn_url: string;
                topics?: string[];
                watchers: number;
                watchers_count: number;
                created_at: string;
                updated_at: string;
                allow_forking?: boolean;
                is_template?: boolean;
            };
            sha: string;
            user: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        };
        base: {
            label: string;
            ref: string;
            repo: {
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
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                is_template?: boolean;
                node_id: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    login: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
                clone_url: string;
                default_branch: string;
                forks: number;
                forks_count: number;
                git_url: string;
                has_downloads: boolean;
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                homepage: string;
                language: string;
                master_branch?: string;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                mirror_url: string;
                open_issues: number;
                open_issues_count: number;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    push: boolean;
                    triage?: boolean;
                    pull: boolean;
                };
                temp_clone_token?: string;
                allow_merge_commit?: boolean;
                allow_squash_merge?: boolean;
                allow_rebase_merge?: boolean;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                    html_url?: string;
                };
                pushed_at: string;
                size: number;
                ssh_url: string;
                stargazers_count: number;
                svn_url: string;
                topics?: string[];
                watchers: number;
                watchers_count: number;
                created_at: string;
                updated_at: string;
                allow_forking?: boolean;
            };
            sha: string;
            user: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        };
        _links: {
            comments: {
                href: string;
            };
            commits: {
                href: string;
            };
            statuses: {
                href: string;
            };
            html: {
                href: string;
            };
            issue: {
                href: string;
            };
            review_comments: {
                href: string;
            };
            review_comment: {
                href: string;
            };
            self: {
                href: string;
            };
        };
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        auto_merge: {
            enabled_by: {
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
            merge_method: "merge" | "squash" | "rebase";
            commit_title: string;
            commit_message: string;
        };
        draft?: boolean;
        merged: boolean;
        mergeable: boolean;
        rebaseable?: boolean;
        mergeable_state: string;
        merged_by: {
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
        comments: number;
        review_comments: number;
        maintainer_can_modify: boolean;
        commits: number;
        additions: number;
        deletions: number;
        changed_files: number;
    }, 201>>;
    /**
     * Update a pull request
     *
     * @see {@link https://developer.github.com/v3/pulls#update-a-pull-request}
     *
     * @param {string}  owner                      - The repo's owner
     * @param {string}  repo                       - The repo's name
     * @param {string}  number                     - The pull request number
     * @param {object}  body                       - The request body
     * @param {string}  body.title                 - Required. The title of the pull request.
     * @param {string}  body.head                  - Required. The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
     * @param {string}  body.base                  - Required. The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
     * @param {string}  body.body                  - The contents of the pull request.
     * @param {boolean} body.maintainer_can_modify - Indicates whether maintainers can modify the pull request.
     *
     * @return {object} Pull request data
     */
    updatePullRequest: (owner: string, repo: string, number: string, body: PullRequestBody) => Promise<import("@octokit/types").OctokitResponse<{
        url: string;
        id: number;
        node_id: string;
        html_url: string;
        diff_url: string;
        patch_url: string;
        issue_url: string;
        commits_url: string;
        review_comments_url: string;
        review_comment_url: string;
        comments_url: string;
        statuses_url: string;
        number: number;
        state: "open" | "closed";
        locked: boolean;
        title: string;
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
        labels: {
            id: number;
            node_id: string;
            url: string;
            name: string;
            description: string;
            color: string;
            default: boolean;
        }[];
        milestone: {
            url: string;
            html_url: string;
            labels_url: string;
            id: number;
            node_id: string;
            number: number;
            state: "open" | "closed";
            title: string;
            description: string;
            creator: {
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
            open_issues: number;
            closed_issues: number;
            created_at: string;
            updated_at: string;
            closed_at: string;
            due_on: string;
        };
        active_lock_reason?: string;
        created_at: string;
        updated_at: string;
        closed_at: string;
        merged_at: string;
        merge_commit_sha: string;
        assignee: {
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
        assignees?: {
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
        }[];
        requested_reviewers?: {
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
        }[];
        requested_teams?: {
            id: number;
            node_id: string;
            url: string;
            members_url: string;
            name: string;
            description: string;
            permission: string;
            privacy?: string;
            html_url: string;
            repositories_url: string;
            slug: string;
            ldap_dn?: string;
        }[];
        head: {
            label: string;
            ref: string;
            repo: {
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
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                node_id: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    login: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
                clone_url: string;
                default_branch: string;
                forks: number;
                forks_count: number;
                git_url: string;
                has_downloads: boolean;
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                homepage: string;
                language: string;
                master_branch?: string;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                mirror_url: string;
                open_issues: number;
                open_issues_count: number;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    push: boolean;
                    triage?: boolean;
                    pull: boolean;
                };
                temp_clone_token?: string;
                allow_merge_commit?: boolean;
                allow_squash_merge?: boolean;
                allow_rebase_merge?: boolean;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                };
                pushed_at: string;
                size: number;
                ssh_url: string;
                stargazers_count: number;
                svn_url: string;
                topics?: string[];
                watchers: number;
                watchers_count: number;
                created_at: string;
                updated_at: string;
                allow_forking?: boolean;
                is_template?: boolean;
            };
            sha: string;
            user: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        };
        base: {
            label: string;
            ref: string;
            repo: {
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
                description: string;
                downloads_url: string;
                events_url: string;
                fork: boolean;
                forks_url: string;
                full_name: string;
                git_commits_url: string;
                git_refs_url: string;
                git_tags_url: string;
                hooks_url: string;
                html_url: string;
                id: number;
                is_template?: boolean;
                node_id: string;
                issue_comment_url: string;
                issue_events_url: string;
                issues_url: string;
                keys_url: string;
                labels_url: string;
                languages_url: string;
                merges_url: string;
                milestones_url: string;
                name: string;
                notifications_url: string;
                owner: {
                    avatar_url: string;
                    events_url: string;
                    followers_url: string;
                    following_url: string;
                    gists_url: string;
                    gravatar_id: string;
                    html_url: string;
                    id: number;
                    node_id: string;
                    login: string;
                    organizations_url: string;
                    received_events_url: string;
                    repos_url: string;
                    site_admin: boolean;
                    starred_url: string;
                    subscriptions_url: string;
                    type: string;
                    url: string;
                };
                private: boolean;
                pulls_url: string;
                releases_url: string;
                stargazers_url: string;
                statuses_url: string;
                subscribers_url: string;
                subscription_url: string;
                tags_url: string;
                teams_url: string;
                trees_url: string;
                url: string;
                clone_url: string;
                default_branch: string;
                forks: number;
                forks_count: number;
                git_url: string;
                has_downloads: boolean;
                has_issues: boolean;
                has_projects: boolean;
                has_wiki: boolean;
                has_pages: boolean;
                homepage: string;
                language: string;
                master_branch?: string;
                archived: boolean;
                disabled: boolean;
                visibility?: string;
                mirror_url: string;
                open_issues: number;
                open_issues_count: number;
                permissions?: {
                    admin: boolean;
                    maintain?: boolean;
                    push: boolean;
                    triage?: boolean;
                    pull: boolean;
                };
                temp_clone_token?: string;
                allow_merge_commit?: boolean;
                allow_squash_merge?: boolean;
                allow_rebase_merge?: boolean;
                license: {
                    key: string;
                    name: string;
                    url: string;
                    spdx_id: string;
                    node_id: string;
                    html_url?: string;
                };
                pushed_at: string;
                size: number;
                ssh_url: string;
                stargazers_count: number;
                svn_url: string;
                topics?: string[];
                watchers: number;
                watchers_count: number;
                created_at: string;
                updated_at: string;
                allow_forking?: boolean;
            };
            sha: string;
            user: {
                avatar_url: string;
                events_url: string;
                followers_url: string;
                following_url: string;
                gists_url: string;
                gravatar_id: string;
                html_url: string;
                id: number;
                node_id: string;
                login: string;
                organizations_url: string;
                received_events_url: string;
                repos_url: string;
                site_admin: boolean;
                starred_url: string;
                subscriptions_url: string;
                type: string;
                url: string;
            };
        };
        _links: {
            comments: {
                href: string;
            };
            commits: {
                href: string;
            };
            statuses: {
                href: string;
            };
            html: {
                href: string;
            };
            issue: {
                href: string;
            };
            review_comments: {
                href: string;
            };
            review_comment: {
                href: string;
            };
            self: {
                href: string;
            };
        };
        author_association: "COLLABORATOR" | "CONTRIBUTOR" | "FIRST_TIMER" | "FIRST_TIME_CONTRIBUTOR" | "MANNEQUIN" | "MEMBER" | "NONE" | "OWNER";
        auto_merge: {
            enabled_by: {
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
            merge_method: "merge" | "squash" | "rebase";
            commit_title: string;
            commit_message: string;
        };
        draft?: boolean;
        merged: boolean;
        mergeable: boolean;
        rebaseable?: boolean;
        mergeable_state: string;
        merged_by: {
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
        comments: number;
        review_comments: number;
        maintainer_can_modify: boolean;
        commits: number;
        additions: number;
        deletions: number;
        changed_files: number;
    }, 200>>;
    /**
     * List commits on a pull request
     *
     * @see {@link https://developer.github.com/v3/pulls#list-commits-on-a-pull-request}
     *
     * @param {string} owner       - The repo's owner
     * @param {string} repo        - The repo's name
     * @param {string} number      - The pull request number
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} Pull request data
     */
    getPullRequestCommits: (owner: string, repo: string, number: string, params?: Params) => Promise<import("@octokit/types").OctokitResponse<{
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
    }[], 200>>;
    /**
     * List pull requests files
     *
     * @see {@link https://developer.github.com/v3/pulls#list-pull-requests-files}
     *
     * @param {string} owner       - The repo's owner
     * @param {string} repo        - The repo's name
     * @param {string} number      - The pull request number
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} Pull request data
     */
    getPullRequestFiles: (owner: string, repo: string, number: string, params?: Params) => Promise<import("@octokit/types").OctokitResponse<{
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
    }[], 200>>;
    /**
     * Get if a pull request has been merged. 204=merged, 404=not merged
     *
     * @see {@link https://developer.github.com/v3/pulls#get-if-a-pull-request-has-been-merged}
     *
     * @param {string} owner  - The repo's owner
     * @param {string} repo   - The repo's name
     * @param {string} number - The pull request number
     *
     * @return {null} 204=merged / 404=not merged
     */
    getIsMerged: (owner: string, repo: string, number: string) => Promise<import("@octokit/types").OctokitResponse<never, 204>>;
    /**
     * Merge a pull request (Merge Button)
     *
     * @see {@link https://developer.github.com/v3/pulls#merge-a-pull-request-merge-button}
     *
     * @param {string} owner                 - The repo's owner
     * @param {string} repo                  - The repo's name
     * @param {object} params                - An object of parameters for the request
     * @param {string} params.commit_title   - Title for the automatic commit message.
     * @param {string} params.commit_message - Extra detail to append to automatic commit message.
     * @param {string} params.sha            - SHA that pull request head must match to allow merge.
     * @param {string} params.merge_method   - Merge method to use. Possible values are merge, squash or rebase. Default is merge.
     * @param {int}    params.page           - The page of results to retrieve
     *
     * @return {object} Pull request data
     */
    merge: (owner: string, repo: string, number: string, params?: Params) => Promise<import("@octokit/types").OctokitResponse<{
        sha: string;
        merged: boolean;
        message: string;
    }, 200>>;
};
export default _default;