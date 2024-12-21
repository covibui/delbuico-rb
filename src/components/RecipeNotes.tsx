import { Stack, Typography } from "@mui/material";
import MarkdownBlock from "./MarkdownBlock";

interface Props {
  notes: string;
}

export default function RecipeNotes({ notes }: Props) {
  return (
    <Stack spacing={1}>
      <Typography variant="h2">Notes</Typography>
      <MarkdownBlock>{notes}</MarkdownBlock>
    </Stack>
  );
}
