import { Stack, Typography } from "@mui/material";
import MarkdownBlock from "./MarkdownBlock";

interface Props {
  notes: string;
}

export default function RecipeNotes({ notes }: Props) {
  return (
    <Stack>
      <Typography variant="h2">Notes</Typography>
      <MarkdownBlock>{notes}</MarkdownBlock>
    </Stack>
  );
}
