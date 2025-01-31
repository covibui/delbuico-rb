import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import { RecipeCacheMeta } from "src/types";

const recipesDirectory = path.join(process.cwd(), "content/recipes");

let RecipeCache: RecipeCacheMeta[];

export function fetchRecipeCacheMeta(): RecipeCacheMeta[] {
  if (RecipeCache) {
    return RecipeCache;
  }

  // Get file names under /recipes
  const fileNames = fs.readdirSync(recipesDirectory);
  const allRecipesData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(recipesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the recipe metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });
      const matterData = matterResult.data as {
        slug: string;
        title: string;
        group: string;
        image?: string;
        fullPath: string;
        url: string;
      };
      matterData.fullPath = fullPath;

      const slug = fileName.replace(/\.mdx$/, "");

      // Validate slug string
      if (matterData.slug !== slug) {
        throw new Error(
          `slug field does not match with the path of its content source, ${slug} !== ${matterData.slug}`,
        );
      }

      return matterData;
    });

  RecipeCache = allRecipesData;
  return RecipeCache;
}

export function countRecipes(
  field: "group" | "tags" | null = null,
  value?: string,
): number {
  return fetchRecipeCacheMeta().filter(
    (recipe) =>
      !value ||
      (field === "group"
        ? recipe.group === value
        : recipe.tags && recipe.tags.includes(value)),
  ).length;
}

export function listRecipeCacheMeta(
  field: "group" | "tags" | null = null,
  value?: string,
): RecipeCacheMeta[] {
  return fetchRecipeCacheMeta().filter(
    (recipe) =>
      !value ||
      (field === "group"
        ? recipe.group === value
        : recipe.tags && recipe.tags.includes(value)),
  );
}
