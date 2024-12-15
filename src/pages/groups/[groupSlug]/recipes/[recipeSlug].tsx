import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { fetchRecipeCacheMeta } from "@lib/recipes";
import Layout from "@components/Layout";
import { getGroup } from "@lib/groups";
import { Stack, Typography } from "@mui/material";
import { getAuthor } from "@lib/authors";
import { RecipeCacheMeta, RecipeContent } from "src/types";
import TagRow from "@components/TagRow";
import { getTags } from "@lib/tags";
import RecipeData from "@components/RecipeData";
import pluralize from "@utils/pluralize";
import RecipeNotes from "@components/RecipeNotes";
import RecipeMaterials from "@components/RecipeMaterials";
import RecipeIngredients from "@components/RecipeIngredients";
import RecipeDirections from "@components/RecipeDirections";
import BasicMeta from "@components/meta/BasicMeta";

const slugToRecipeMeta = ((RecipeMeta) => {
  let hash: { [key: string]: RecipeCacheMeta } = {};
  RecipeMeta.forEach((recipe) => (hash[recipe.slug] = recipe));
  return hash;
})(fetchRecipeCacheMeta());

export default function Recipe(recipe: RecipeContent) {
  return (
    <Layout
      title={recipe.group.name}
      itemCount={recipe.group.count}
      backLink={`/groups/${recipe.group.slug}`}
    >
      <BasicMeta
        title={recipe.title}
        author={recipe.author.name}
        url={`/groups/${recipe.group.slug}/recipes/${recipe.slug}`}
      />
      <Stack spacing={2}>
        <Stack spacing={1}>
          <Typography variant="h1">{recipe.title}</Typography>
          <Typography variant="subtitle1">by: {recipe.author.name}</Typography>
        </Stack>
        {recipe.tags && recipe.tags.length > 0 && (
          <TagRow tags={getTags(recipe.tags)} />
        )}
        {/* TODO: add recipe image support */}
        <RecipeData
          stats={[
            {
              title: "Prep Time",
              value: `${recipe.prep_time.time} ${pluralize(recipe.prep_time.unit, recipe.prep_time.time)}`,
            },
            {
              title: "Cook Time",
              value: `${recipe.cook_time.time} ${pluralize(recipe.cook_time.unit, recipe.cook_time.time)}`,
            },
            {
              title: "Serves",
              value: `${recipe.servings}`,
            },
          ]}
        />
        {recipe.pre_recipe_notes && (
          <RecipeNotes notes={recipe.pre_recipe_notes} />
        )}
        {recipe.materials && recipe.materials.length > 0 && (
          <RecipeMaterials materials={recipe.materials} />
        )}
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <RecipeIngredients ingredients={recipe.ingredients} />
        )}
        {recipe.directions && recipe.directions.length > 0 && (
          <RecipeDirections directions={recipe.directions} />
        )}
        {recipe.post_recipe_notes && (
          <RecipeNotes notes={recipe.post_recipe_notes} />
        )}
      </Stack>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchRecipeCacheMeta().map(
    (recipe) => "/groups/" + recipe.group + "/recipes/" + recipe.slug,
  );
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const recipeSlug = params?.recipeSlug as string;
  const source = fs.readFileSync(slugToRecipeMeta[recipeSlug].fullPath, "utf8");
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
