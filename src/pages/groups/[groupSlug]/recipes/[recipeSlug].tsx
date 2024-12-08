import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import { fetchRecipeContent, RecipeContent } from "@lib/recipes";

const slugToRecipeContent = ((recipeContents) => {
  let hash: { [key: string]: RecipeContent } = {};
  recipeContents.forEach((recipe) => (hash[recipe.slug] = recipe));
  return hash;
})(fetchRecipeContent());

interface Props {
  slug: string;
  title: string;
  group: string;
  author: string;
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

export default function Recipe({
  title,
  slug,
  group,
  tags,
  author,
  ...restProps
}: Props) {
  return (
    <div>
      <p>
        <a href="/">Home</a> / <a href={`/groups/${group}`}>{group}</a>
      </p>
      <p>{title}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchRecipeContent().map(
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
      title: data.title,
      slug: data.slug,
      tags: data.tags || [],
      group: data.group,
      author: data.author,
      prep_time: data.prep_time,
      cook_time: data.cook_time,
      servings: data.servings,
      pre_recipe_notes: data.pre_recipe_notes,
      materials: data.materials,
      ingredients: data.ingredients,
      directions: data.directions,
      post_recipe_notes: data.post_recipe_notes,
    },
  };
};
