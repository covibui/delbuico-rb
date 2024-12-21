import { Stack, Typography } from "@mui/material";
import { RecipeIngredient } from "src/types";
import List from "./List";

interface Props {
  ingredients: RecipeIngredient[];
}

export default function RecipeIngredients({ ingredients }: Props) {
  return (
    <Stack spacing={1}>
      <Typography variant="h2">Ingredients</Typography>
      <List
        items={ingredients.map((ingredient) => (
          <Typography variant="body2">
            {ingredient.item}{" "}
            {ingredient.substitute && (
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                ({ingredient.substitute})
              </Typography>
            )}
          </Typography>
        ))}
      />
    </Stack>
  );
}
