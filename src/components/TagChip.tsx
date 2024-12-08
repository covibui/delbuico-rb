import { getTag } from "@lib/tags";
import { Chip } from "@mui/material";
import palette from "@theme/palette";

export default function TagChip({ slug }: { slug: string }) {
  const tag = getTag(slug);
  return (
    <Chip
      label={tag.name}
      sx={{
        "&:nth-of-type(4n+1) .MuiBox-root": {
          backgroundColor: palette.beige.B1,
        },
        "&:nth-of-type(4n+2) .MuiBox-root": {
          backgroundColor: palette.beige.B2,
        },
        "&:nth-of-type(4n+3) .MuiBox-root": {
          backgroundColor: palette.beige.B3,
        },
        "&:nth-of-type(4n+4) .MuiBox-root": {
          backgroundColor: palette.beige.B4,
        },
      }}
    />
  );
}
