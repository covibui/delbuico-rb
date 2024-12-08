import Tile from "./Tile";
import {Chip} from "@mui/material";
import { RecipeContent } from "@lib/recipes";

export default function RecipeTile({recipe}: {recipe: RecipeContent}) {
	return (
		<Tile name={recipe.title} href={`/groups/${recipe.group}/recipes/${recipe.slug}`}>
			{recipe.tags?.map((tag, idx) => (
				<Chip key={idx} label={tag} />
			))}
		</Tile>
	);
}
