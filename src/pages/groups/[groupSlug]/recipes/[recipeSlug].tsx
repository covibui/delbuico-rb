import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { fetchRecipeCacheContent } from "@lib/recipes";
import Layout from "@components/Layout";
import { getGroup } from "@lib/groups";
import { Stack, Typography } from "@mui/material";
import { getAuthor } from "@lib/authors";
import { AuthorContent, GroupContent, RecipeCacheContent } from "src/types";

const slugToRecipeContent = ((recipeContents) => {
  let hash: { [key: string]: RecipeCacheContent } = {};
  recipeContents.forEach((recipe) => (hash[recipe.slug] = recipe));
  return hash;
})(fetchRecipeCacheContent());

interface Props {
  slug: string;
  title: string;
  group: GroupContent;
  author: AuthorContent;
  tags: string[];
  prep_time: {
    time: number;
    unit: string;
  };
  cook_time: {
    time: number;
    unit: string;
  };
  servings: number;
  pre_recipe_notes?: string;
  materials: {
    item: string;
  }[];
  ingredients: {
    item: string;
    substitute?: string;
  }[];
  directions: {
    step: string;
    ingredients: {
      item: string;
    };
  }[];
  post_recipe_notes?: string;
}

export default function Recipe(recipe: Props) {
  return (
    <Layout title={recipe.group.name} itemCount={recipe.group.count}>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="h1">{recipe.title}</Typography>
          <Typography variant="subtitle1">by: {recipe.author.name}</Typography>
        </Stack>
      </Stack>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchRecipeCacheContent().map(
    (recipe) => "/groups/" + recipe.group + "/recipes/" + recipe.slug,
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipeSlug = params?.recipeSlug as string;
  const source = fs.readFileSync(
    slugToRecipeContent[recipeSlug].fullPath,
    "utf8",
  );
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  return {
    props: {
      ...data,
      group: getGroup(data.group),
      author: getAuthor(data.author),
    },
  };
};
