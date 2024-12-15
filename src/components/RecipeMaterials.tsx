import { Stack, Typography } from "@mui/material";
import { RecipeMaterial } from "src/types";

interface Props {
  materials: RecipeMaterial[];
}

export default function RecipeMaterials({ materials }: Props) {
  return (
    <Stack>
      <Typography>Materials</Typography>
      <Stack component="ul">
        {materials.map((material, idx) => (
          <Typography key={idx} component="li">
            {material.item}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
}
