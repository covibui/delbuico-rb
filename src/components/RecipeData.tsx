import { Box, Stack, Typography } from "@mui/material";
import pluralize from "@utils/pluralize";
import { MeasuredTime } from "src/types";

interface Props {
  stats: {
    title: string;
    value: string;
  }[];
}

export default function RecipeData({ stats }: Props) {
  return (
    <Box>
      <Stack direction="row">
        {stats.map((stat, idx) => (
          <Box key={idx}>
            <Typography>{stat.title}</Typography>
            <Typography>{stat.value}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
