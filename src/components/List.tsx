import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  items: ReactNode[];
  type?: "ul" | "ol";
}

export default function List({ items, type = "ul" }: Props) {
  return (
    <Stack component={type} spacing={0.5} sx={{ my: 0, pl: 3 }}>
      {items.map((item, idx) => (
        <Typography key={idx} component="li" variant="body2">
          {item}
        </Typography>
      ))}
    </Stack>
  );
}
