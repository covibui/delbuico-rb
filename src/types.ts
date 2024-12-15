export type SiteConfig = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
};

export type AuthorContent = {
  readonly slug: string;
  readonly name: string;
};

export type GroupContent = {
  readonly slug: string;
  readonly name: string;
  readonly image?: string;
  readonly count: number;
};

export type TagContent = {
  readonly slug: string;
  readonly name: string;
};

export type RecipeCacheContent = {
  readonly slug: string;
  readonly title: string;
  readonly group: string;
  readonly tags?: string[];
  readonly fullPath: string;
};

export interface RecipeContent
  extends Omit<RecipeCacheContent, "group" | "tags"> {
  group: GroupContent;
  tags: TagContent[];
}
