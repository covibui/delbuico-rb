import { Box, Stack, Typography } from "@mui/material";
import { RecipeDirection } from "src/types";

interface Props {
  directions: RecipeDirection[];
}

export default function RecipeDirections({ directions }: Props) {
  return (
    <Stack>
      <Typography>Directions</Typography>
      <Stack component="ol">
        {directions.map((direction, idx) => (
          <Box key={idx} component="li">
            <Typography>{direction.step}</Typography>
            {direction.ingredients && direction.ingredients.length > 0 && (
              <Stack component="ul">
                {direction.ingredients.map((ingredient, idx) => (
                  <Typography key={idx} component="li">
                    {ingredient}
                  </Typography>
                ))}
              </Stack>
            )}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
