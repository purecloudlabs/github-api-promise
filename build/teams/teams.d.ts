import { Params } from "../types";
/**
 * Teams module
 *
 * This API is only available to authenticated members of the team's organization. OAuth access tokens require the read:org scope.
 *
 * @module teams/teams
 */
declare const _default: {
    /**
     * List teams
     *
     * @see {@link https://developer.github.com/v3/teams/#list-teams}
     *
     * @param {string} org         - The organization
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} team data
     */
    getTeams: (org: string, params?: Params) => Promise<{
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
    }[]>;
    /**
     * Get team
     *
     * @see {@link https://developer.github.com/v3/teams/#get-team}
     *
     * @param {string} id     - The team id
     * @param {string} org_id - The org id
     *
     * @return {object} team data
     */
    getTeam: (id: string, org_id: string) => Promise<{
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        name: string;
        slug: string;
        description: string;
        privacy?: "closed" | "secret";
        permission: string;
        members_url: string;
        repositories_url: string;
        parent?: {
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
        members_count: number;
        repos_count: number;
        created_at: string;
        updated_at: string;
        organization: {
            login: string;
            id: number;
            node_id: string;
            url: string;
            repos_url: string;
            events_url: string;
            hooks_url: string;
            issues_url: string;
            members_url: string;
            public_members_url: string;
            avatar_url: string;
            description: string;
            name?: string;
            company?: string;
            blog?: string;
            location?: string;
            email?: string;
            twitter_username?: string;
            is_verified?: boolean;
            has_organization_projects: boolean;
            has_repository_projects: boolean;
            public_repos: number;
            public_gists: number;
            followers: number;
            following: number;
            html_url: string;
            created_at: string;
            type: string;
            total_private_repos?: number;
            owned_private_repos?: number;
            private_gists?: number;
            disk_usage?: number;
            collaborators?: number;
            billing_email?: string;
            plan?: {
                name: string;
                space: number;
                private_repos: number;
                filled_seats?: number;
                seats?: number;
            };
            default_repository_permission?: string;
            members_can_create_repositories?: boolean;
            two_factor_requirement_enabled?: boolean;
            members_allowed_repository_creation_type?: string;
            members_can_create_public_repositories?: boolean;
            members_can_create_private_repositories?: boolean;
            members_can_create_internal_repositories?: boolean;
            members_can_create_pages?: boolean;
            members_can_create_public_pages?: boolean;
            members_can_create_private_pages?: boolean;
            members_can_fork_private_repositories?: boolean;
            updated_at: string;
        };
        ldap_dn?: string;
    }>;
    /**
     * Create team
     *
     * To create a team, the authenticated user must be a member of :org.
     *
     * @see {@link https://developer.github.com/v3/teams/#create-team}
     *
     * @param {string}   org                 - The organization
     * @param {object}   body                - The request body
     * @param {string}   body.name           - Required. The name of the team.
     * @param {string}   body.description    - The description of the team.
     * @param {string[]} body.maintainers    - The logins of organization members to add as maintainers of the team.
     * @param {string[]} body.repo_names     - The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
     * @param {string}   body.privacy        - The level of privacy this team should have. The options are:
     *
     * **For a non-nested team:**
     * * `secret` - only visible to organization owners and members of this team.
     * * `closed` - visible to all members of this organization.
     *
     * Default: `secret`
     *
     * **For a `parent` or child team:**
     * * `closed` - visible to all members of this organization.
     *
     * Default for child team: `closed`
     *
     * Note: You must pass the hellcat-preview media type to set privacy default to `closed` for child teams.
     *
     * @param {string}   body.permission     - **Deprecated.** The permission that new repositories will be added to the team with when none is specified. Can be one of:
     * * `pull` - team members can pull, but not push to or administer newly-added repositories.
     * * `push` - team members can pull and push, but not administer newly-added repositories.
     * * `admin` - team members can pull, push and administer newly-added repositories.
     *
     * Default: `pull`
     *
     * @param {int}      body.parent_team_id - The ID of a team to set as the parent team. Note: You must pass the hellcat-preview media type to use this parameter.
     *
     * @return {object} team data
     */
    createTeam: (org: string, body: Params) => Promise<{
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        name: string;
        slug: string;
        description: string;
        privacy?: "closed" | "secret";
        permission: string;
        members_url: string;
        repositories_url: string;
        parent?: {
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
        members_count: number;
        repos_count: number;
        created_at: string;
        updated_at: string;
        organization: {
            login: string;
            id: number;
            node_id: string;
            url: string;
            repos_url: string;
            events_url: string;
            hooks_url: string;
            issues_url: string;
            members_url: string;
            public_members_url: string;
            avatar_url: string;
            description: string;
            name?: string;
            company?: string;
            blog?: string;
            location?: string;
            email?: string;
            twitter_username?: string;
            is_verified?: boolean;
            has_organization_projects: boolean;
            has_repository_projects: boolean;
            public_repos: number;
            public_gists: number;
            followers: number;
            following: number;
            html_url: string;
            created_at: string;
            type: string;
            total_private_repos?: number;
            owned_private_repos?: number;
            private_gists?: number;
            disk_usage?: number;
            collaborators?: number;
            billing_email?: string;
            plan?: {
                name: string;
                space: number;
                private_repos: number;
                filled_seats?: number;
                seats?: number;
            };
            default_repository_permission?: string;
            members_can_create_repositories?: boolean;
            two_factor_requirement_enabled?: boolean;
            members_allowed_repository_creation_type?: string;
            members_can_create_public_repositories?: boolean;
            members_can_create_private_repositories?: boolean;
            members_can_create_internal_repositories?: boolean;
            members_can_create_pages?: boolean;
            members_can_create_public_pages?: boolean;
            members_can_create_private_pages?: boolean;
            members_can_fork_private_repositories?: boolean;
            updated_at: string;
        };
        ldap_dn?: string;
    }>;
    /**
     * Edit team
     *
     * To edit a team, the authenticated user must either be an owner of the org that the team is associated with, or a maintainer of the team.
     *
     * @see {@link https://developer.github.com/v3/teams/#edit-team}
     *
     * @param {string}   id                  - The team ID
     * @param {string}   org_id              - The org ID
     * @param {object}   body                - The request body
     * @param {string}   body.name           - Required. The name of the team.
     * @param {string}   body.description    - The description of the team.
     * @param {string}   body.privacy        - The level of privacy this team should have. The options are:
     *
     * **For a non-nested team:**
     * * `secret` - only visible to organization owners and members of this team.
     * * `closed` - visible to all members of this organization.
     *
     * **For a `parent` or child team:**
     * * `closed` - visible to all members of this organization.
     * @param {string}   body.permission     - **Deprecated.** The permission that new repositories will be added to the team with when none is specified. Can be one of:
     * * `pull` - team members can pull, but not push to or administer newly-added repositories.
     * * `push` - team members can pull and push, but not administer newly-added repositories.
     * * `admin` - team members can pull, push and administer newly-added repositories.
     *
     * Default: `pull`
     * @param {int}      body.parent_team_id - The ID of a team to set as the parent team. Note: You must pass the hellcat-preview media type to use this parameter.
     *
     * @return {object} team data
     */
    editTeam: (id: string, org_id: string, body: Params) => Promise<{
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        name: string;
        slug: string;
        description: string;
        privacy?: "closed" | "secret";
        permission: string;
        members_url: string;
        repositories_url: string;
        parent?: {
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
        members_count: number;
        repos_count: number;
        created_at: string;
        updated_at: string;
        organization: {
            login: string;
            id: number;
            node_id: string;
            url: string;
            repos_url: string;
            events_url: string;
            hooks_url: string;
            issues_url: string;
            members_url: string;
            public_members_url: string;
            avatar_url: string;
            description: string;
            name?: string;
            company?: string;
            blog?: string;
            location?: string;
            email?: string;
            twitter_username?: string;
            is_verified?: boolean;
            has_organization_projects: boolean;
            has_repository_projects: boolean;
            public_repos: number;
            public_gists: number;
            followers: number;
            following: number;
            html_url: string;
            created_at: string;
            type: string;
            total_private_repos?: number;
            owned_private_repos?: number;
            private_gists?: number;
            disk_usage?: number;
            collaborators?: number;
            billing_email?: string;
            plan?: {
                name: string;
                space: number;
                private_repos: number;
                filled_seats?: number;
                seats?: number;
            };
            default_repository_permission?: string;
            members_can_create_repositories?: boolean;
            two_factor_requirement_enabled?: boolean;
            members_allowed_repository_creation_type?: string;
            members_can_create_public_repositories?: boolean;
            members_can_create_private_repositories?: boolean;
            members_can_create_internal_repositories?: boolean;
            members_can_create_pages?: boolean;
            members_can_create_public_pages?: boolean;
            members_can_create_private_pages?: boolean;
            members_can_fork_private_repositories?: boolean;
            updated_at: string;
        };
        ldap_dn?: string;
    }>;
    /**
     * Delete team
     *
     * To delete a team, the authenticated user must be a team maintainer or an owner of the org associated with the team. If you are an organization owner and you pass the hellcat-preview media type, deleting a parent team will delete all of its child teams as well.
     *
     * @see {@link https://developer.github.com/v3/teams/#delete-team}
     *
     * @param {string} id     - The team ID
     * @param {string} org_id - The org ID
     * @return {nothing}
     */
    deleteTeam: (id: string, org_id: string) => Promise<never>;
    /**
     * List child teams
     *
     * At this time, the hellcat-preview media type is required to use this endpoint.
     *
     * @see {@link https://developer.github.com/v3/teams/#list-child-teams}
     *
     * @param {string} id          - The team ID
     * @param {string} org_id      - The org ID
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} team data
     */
    getChildTeams: (id: string, org_id: string, params?: Params) => Promise<{
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
    }[]>;
    /**
     * List team repos
     *
     * Note: If you pass the hellcat-preview media type, the response will include any repositories inherited through a parent team.
     *
     * @see {@link https://developer.github.com/v3/teams/#list-team-repos}
     *
     * @param {string} id          - The team ID
     * @param {string} org_id      - The org ID
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} team data
     */
    getTeamRepos: (id: string, org_id: string, params?: Params) => Promise<{
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
        template_repository?: {
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
    }[]>;
    /**
     * Check if a team manages a repository
     *
     * Note: If you pass the hellcat-preview media type, repositories inherited through a parent team will be checked.
     *
     * @see {@link https://developer.github.com/v3/teams/#check-if-a-team-manages-a-repository}
     *
     *
     * @param {string} id     - The team ID
     * @param {string} org_id - The org ID
     * @param {string} owner  - The owner name
     * @param {string} repo   - The repo name
     *
     * @return {nothing} 204 if is managed, 404 if not
     */
    getIsRepoManagedByTeam: (id: string, org_id: string, owner: string, repo: string) => Promise<{
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
        forks: number;
        permissions?: {
            admin: boolean;
            pull: boolean;
            triage?: boolean;
            push: boolean;
            maintain?: boolean;
        };
        role_name?: string;
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
        temp_clone_token?: string;
        allow_squash_merge?: boolean;
        allow_auto_merge?: boolean;
        delete_branch_on_merge?: boolean;
        allow_merge_commit?: boolean;
        allow_forking?: boolean;
        subscribers_count?: number;
        network_count?: number;
        open_issues: number;
        watchers: number;
        master_branch?: string;
    }>;
    /**
     * Add or update team repository
     *
     * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. If you pass the hellcat-preview media type, you can modify repository permissions of child teams.
     *
     * @see {@link https://developer.github.com/v3/teams/#add-or-update-team-repository}
     *
     * @param {string} id              - The team ID
     * @param {string} org_id          - The organization ID
     * @param {string} owner           - The owner name
     * @param {string} repo            - The repo name
     * @param {object} body            - The request body
     * @param {string} body.permission - The permission to grant the team on this repository. Can be one of:
     * * `pull` - team members can pull, but not push to or administer this repository.
     * * `push` - team members can pull and push, but not administer this repository.
     * * `admin` - team members can pull, push and administer this repository.
     *
     * If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
     *
     * **Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited through a parent team.
     *
     * @return {nothing}
     */
    updateTeamRepository: (id: string, org_id: string, owner: string, repo: string, body?: any) => Promise<never>;
    /**
     * Remove team repository
     *
     * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
     *
     * @see {@link https://developer.github.com/v3/teams/#remove-team-repository}
     *
     * @param {string} id        - The team ID
     * @param {string} org_id    - The org ID
     * @param {string} owner     - The owner name
     * @param {string} repo      - The repo name
     *
     * @return {nothing}
     */
    removeTeamRepository: (id: string, org_id: string, owner: string, repo: string) => Promise<never>;
    /**
     * List user teams
     *
     * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user, repo, or read:org scope when authenticating via OAuth.
     *
     * @see {@link https://developer.github.com/v3/teams/#}
     *
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} team data
     */
    getUserTeams: (params?: Params) => Promise<{
        id: number;
        node_id: string;
        url: string;
        html_url: string;
        name: string;
        slug: string;
        description: string;
        privacy?: "closed" | "secret";
        permission: string;
        members_url: string;
        repositories_url: string;
        parent?: {
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
        members_count: number;
        repos_count: number;
        created_at: string;
        updated_at: string;
        organization: {
            login: string;
            id: number;
            node_id: string;
            url: string;
            repos_url: string;
            events_url: string;
            hooks_url: string;
            issues_url: string;
            members_url: string;
            public_members_url: string;
            avatar_url: string;
            description: string;
            name?: string;
            company?: string;
            blog?: string;
            location?: string;
            email?: string;
            twitter_username?: string;
            is_verified?: boolean;
            has_organization_projects: boolean;
            has_repository_projects: boolean;
            public_repos: number;
            public_gists: number;
            followers: number;
            following: number;
            html_url: string;
            created_at: string;
            type: string;
            total_private_repos?: number;
            owned_private_repos?: number;
            private_gists?: number;
            disk_usage?: number;
            collaborators?: number;
            billing_email?: string;
            plan?: {
                name: string;
                space: number;
                private_repos: number;
                filled_seats?: number;
                seats?: number;
            };
            default_repository_permission?: string;
            members_can_create_repositories?: boolean;
            two_factor_requirement_enabled?: boolean;
            members_allowed_repository_creation_type?: string;
            members_can_create_public_repositories?: boolean;
            members_can_create_private_repositories?: boolean;
            members_can_create_internal_repositories?: boolean;
            members_can_create_pages?: boolean;
            members_can_create_public_pages?: boolean;
            members_can_create_private_pages?: boolean;
            members_can_fork_private_repositories?: boolean;
            updated_at: string;
        };
        ldap_dn?: string;
    }[]>;
    /**
     * List team projects
     *
     * Lists the organization projects for a team. If you pass the hellcat-preview media type, the response will include projects inherited from a parent team.
     *
     * @see {@link https://developer.github.com/v3/teams/#list-team-projects}
     *
     * @param {string} id          - The team ID
     * @param {string} org_id      - The org ID
     * @param {object} params      - An object of parameters for the request
     * @param {int}    params.page - The page of results to retrieve
     *
     * @return {object} project data
     */
    getTeamProjects: (id: string, org_id: string, params?: Params) => Promise<{
        owner_url: string;
        url: string;
        html_url: string;
        columns_url: string;
        id: number;
        node_id: string;
        name: string;
        body: string;
        number: number;
        state: string;
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
        created_at: string;
        updated_at: string;
        organization_permission?: string;
        private?: boolean;
        permissions: {
            read: boolean;
            write: boolean;
            admin: boolean;
        };
    }[]>;
    /**
     * Review a team project
     *
     * Checks whether a team has read, write, or admin permissions for an organization project. If you pass the hellcat-preview media type, the response will include projects inherited from a parent team.
     *
     * @see {@link https://developer.github.com/v3/teams/#review-a-team-project}
     *
     * @param {string} id        - The team ID
     * @param {string} org_id    - The org ID
     * @param {string} projectId - The project ID
     *
     * @return {object} team data
     */
    getTeamProject: (id: string, org_id: string, projectId: string) => Promise<{
        owner_url: string;
        url: string;
        html_url: string;
        columns_url: string;
        id: number;
        node_id: string;
        name: string;
        body: string;
        number: number;
        state: string;
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
        created_at: string;
        updated_at: string;
        organization_permission?: string;
        private?: boolean;
        permissions: {
            read: boolean;
            write: boolean;
            admin: boolean;
        };
    }>;
    /**
     * Add or update team project
     *
     * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have admin permissions for the project. The project and team must be part of the same organization.
     *
     * @see {@link https://developer.github.com/v3/teams/#add-or-update-team-project}
     *
     * @param {string} id              - The team ID
     * @param {string} org_id          - The org ID
     * @param {string} projectId       - The project ID
     * @param {object} body            - The request body
     * @param {string} body.permission - The permission to grant to the team for this project. Can be one of:
     * * `read` - team members can read, but not write to or administer this project.
     * * `write` - team members can read and write, but not administer this project.
     * * `admin` - team members can read, write and administer this project.
     *
     * Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "HTTP verbs."
     *
     * **Note**: If you pass the `hellcat-preview` media type, you can promote—but not demote—a `permission` attribute inherited from a parent team.
     *
     * @return {nothing}
     */
    updateTeamProject: (id: string, org_id: string, projectId: string, body: Params) => Promise<never>;
    /**
     * Remove team project
     *
     * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have read access to both the team and project, or admin access to the team or project. Note: This endpoint removes the project from the team, but does not delete it.
     *
     * @see {@link https://developer.github.com/v3/teams/#remove-team-project}
     *
     * @param {string} id        - The team ID
     * @param {string} org_id    - The org ID
     * @param {string} projectId - The project ID
     *
     * @return {nothing}
     */
    removeTeamProject: (id: string, org_id: string, projectId: string) => Promise<never>;
};
export default _default;
