import Tile from "./Tile";
import { Stack } from "@mui/material";
import { RecipeContent } from "@lib/recipes";
import TagRow from "./TagRow";

export default function RecipeTile({ recipe }: { recipe: RecipeContent }) {
  return (
    <Tile
      name={recipe.title}
      href={`/groups/${recipe.group}/recipes/${recipe.slug}`}
    >
      {recipe.tags && <TagRow tags={recipe.tags} limit={2} />}
    </Tile>
  );
}
