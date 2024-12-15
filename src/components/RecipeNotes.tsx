import { Stack, Typography } from "@mui/material";

interface Props {
  notes: string;
}

export default function RecipeNotes({ notes }: Props) {
  return (
    <Stack>
      <Typography>Notes</Typography>
      <Typography>{notes}</Typography>
    </Stack>
  );
}
