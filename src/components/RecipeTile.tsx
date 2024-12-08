import Tile from "./Tile";
import TagRow from "./TagRow";
import { RecipeContent } from "src/types";

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
