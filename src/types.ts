export type SiteConfig = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
};

export type AuthorMeta = {
  readonly slug: string;
  readonly name: string;
};

export type GroupMeta = {
  readonly slug: string;
  readonly name: string;
  readonly image?: string;
  readonly count: number;
};

export type TagMeta = {
  readonly slug: string;
  readonly name: string;
};

export type RecipeCacheMeta = {
  readonly slug: string;
  readonly title: string;
  readonly group: string;
  readonly tags?: string[];
  readonly image?: string;
  readonly fullPath: string;
};

export interface RecipeMeta extends Omit<RecipeCacheMeta, "group" | "tags"> {
  group: GroupMeta;
  tags: TagMeta[];
}

export interface MeasuredTime {
  time: number;
  unit: string;
}

export interface RecipeMaterial {
  item: string;
}

export interface RecipeIngredient {
  item: string;
  substitute?: string;
}

export interface RecipeDirection {
  step: string;
  ingredients?: {
    item: string;
  }[];
}

export interface RecipeContent {
  slug: string;
  title: string;
  group: GroupMeta;
  author: AuthorMeta;
  tags: string[];
  image?: string;
  prep_time: MeasuredTime;
  cook_time: MeasuredTime;
  servings: {
    minimum: number;
    maximum?: number;
  };
  pre_recipe_notes?: string;
  materials?: RecipeMaterial[];
  ingredients?: RecipeIngredient[];
  directions?: RecipeDirection[];
  post_recipe_notes?: string;
}
