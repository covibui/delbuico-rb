import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  type?: "ul" | "ol";
}

export default function List({ items, type = "ul" }: Props) {
  return (
    <Stack component={type} spacing={0.5} sx={{ my: 0, pl: 3 }}>
      {items.map((item, idx) => (
        <Box key={idx} component="li">
          {item}
        </Box>
      ))}
    </Stack>
  );
}
