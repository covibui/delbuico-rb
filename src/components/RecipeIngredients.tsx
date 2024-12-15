import { Stack, Typography } from "@mui/material";
import { RecipeIngredient } from "src/types";

interface Props {
  ingredients: RecipeIngredient[];
}

export default function RecipeIngredients({ ingredients }: Props) {
  return (
    <Stack>
      <Typography>Ingredients</Typography>
      <Stack component="ul">
        {ingredients.map((ingredient, idx) => (
          <Typography key={idx} component="li">
            {ingredient.item}{" "}
            {ingredient.substitute && (
              <Typography component="span">
                ({ingredient.substitute})
              </Typography>
            )}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
