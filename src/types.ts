export interface Params {
  page?: number;
  [param: string]: string | number | boolean | undefined;
}

export interface Body {
  body: string;
  [param: string]: string | number | boolean | string[] | undefined;
}

export interface IssuesBody extends Body {
  title: string;
  assignee?: string;
  milestone?: number;
  labels?: string[];
  assignees?: string[];
}

export interface IssuesParams extends Params {
  filter?: string;
  state?: string;
  labels?: string;
  sort?: string;
  direction?: string;
  since?: string;
}

export interface GetRepositoryIssuesParams extends IssuesParams {
  milestone?: string | number;
  assignee?: string;
  creator?: string;
  mentioned?: string;
}

export interface GetRepositoryCommentsParams extends Params {
  sort?: string;
  directions?: "asc" | "desc";
  since?: string;
}

export interface PullRequestCommentParams extends Params {
  sort?: string;
  direction?: string;
  since?: string;
}

export interface PullRequestCommentBody extends Body {
  commit_id: string;
  path: string;
  position: number;
  in_reply_to: number;
}

export interface PullRequestBody extends Body {
  title: string;
  head: string;
  base: number;
  maintainer_can_modify: boolean;
}

export interface PullRequestParams extends Body {
  state?: string;
  head?: string;
  base: string;
  sort?: string;
  direction?: "asc" | "desc";
}

export interface RepoCollaboratorsParams extends Params {
  affiliation?: string;
}

export interface RepoParams extends Params {
  affiliation?: string;
  visibility?: string;
  type?: string;
  sort?: string;
  direction?: "asc" | "desc";
}

export interface RepoBody extends Body {
  name: string;
  description?: string;
  homepage?: string;
  private?: boolean;
  has_issues?: boolean;
  has_projects?: boolean;
  has_wiki?: boolean;
  default_branch: string;
  allow_squash_merge?: boolean;
  allow_merge_commit?: boolean;
  allow_rebase_merge?: boolean;
}
