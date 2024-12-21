import { Box, Stack, Typography } from "@mui/material";
import { RecipeDirection } from "src/types";
import List from "./List";
import MarkdownBlock from "./MarkdownBlock";

interface Props {
  directions: RecipeDirection[];
}

export default function RecipeDirections({ directions }: Props) {
  return (
    <Stack spacing={1}>
      <Typography variant="h2">Directions</Typography>
      <List
        type="ol"
        items={directions.map((direction) => (
          <>
            <MarkdownBlock>{direction.step}</MarkdownBlock>
            {direction.ingredients && direction.ingredients.length > 0 && (
              <List
                items={direction.ingredients.map(({ item }) => (
                  <Typography variant="body2">{item}</Typography>
                ))}
              />
            )}
          </>
        ))}
      />
    </Stack>
  );
}
