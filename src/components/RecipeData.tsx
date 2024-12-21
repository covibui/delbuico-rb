import { Box, Stack, Typography } from "@mui/material";
import palette from "@theme/palette";
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
    <Stack direction="row" justifyContent="center">
      <Box
        sx={{
          backgroundColor: "background.paper",
          py: 1.25,
          px: { xs: 1.25, sm: 2, md: 4 },
        }}
      >
        <Stack direction="row">
          {stats.map((stat, idx) => (
            <Box
              key={idx}
              sx={{
                px: { xs: 1, sm: 2 },
                borderRight: `1px solid ${palette.beige.border}`,
                "&:first-of-type": {
                  pl: 0,
                },
                "&:last-of-type": {
                  pr: 0,
                  borderRight: "none",
                },
              }}
            >
              <Stack spacing={1} sx={{ width: 100, alignItems: "center" }}>
                <Typography sx={{ textTransform: "uppercase" }}>
                  {stat.title}
                </Typography>
                <Typography variant="body2">{stat.value}</Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
