import Tile from "./Tile";
import TagRow from "./TagRow";
import { RecipeMeta } from "src/types";

export default function RecipeTile({ recipe }: { recipe: RecipeMeta }) {
  return (
    <Tile
      name={recipe.title}
      href={`/groups/${recipe.group.slug}/recipes/${recipe.slug}`}
    >
      {recipe.tags && <TagRow tags={recipe.tags} limit={2} />}
    </Tile>
  );
}
