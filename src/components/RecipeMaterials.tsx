import { Stack, Typography } from "@mui/material";
import { RecipeMaterial } from "src/types";
import List from "./List";

interface Props {
  materials: RecipeMaterial[];
}

export default function RecipeMaterials({ materials }: Props) {
  return (
    <Stack spacing={1}>
      <Typography variant="h2">Materials</Typography>
      <List items={materials.map(({ item }) => item)} />
    </Stack>
  );
}
