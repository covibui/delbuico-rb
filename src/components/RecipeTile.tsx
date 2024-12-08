import Tile from "./Tile";
import { Stack } from "@mui/material";
import { RecipeContent } from "@lib/recipes";
import { getTag } from "@lib/tags";
import TagChip from "./TagChip";

export default function RecipeTile({ recipe }: { recipe: RecipeContent }) {
  return (
    <Tile
      name={recipe.title}
      href={`/groups/${recipe.group}/recipes/${recipe.slug}`}
    >
      <Stack direction="row">
        {recipe.tags?.map((tag, idx) => <TagChip key={idx} slug={tag} />)}
      </Stack>
    </Tile>
  );
}
