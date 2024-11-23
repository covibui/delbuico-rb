import Tile from "./Tile";
import {Chip, Typography} from "@mui/material";
import { RecipeContent } from "@lib/recipes";

export default function RecipeTile({recipe}: {recipe: RecipeContent}) {
	return (
		<Tile name={recipe.title} href={`/groups/${recipe.group}/recipes/${recipe.slug}`}>
			{/* <Typography sx={{fontSize: {xs: 10, lg: 12}, fontWeight: 300}}>
				By: {recipe}
			</Typography> */}
			{recipe.tags?.map((tag, idx) => (
				<Chip key={idx} label={tag} />
			))}
		</Tile>
	);
}
