import { getTag } from "@lib/tags";
import { Chip, Stack } from "@mui/material";
import { TagMeta } from "src/types";

export default function TagRow({
  tags,
  limit,
}: {
  tags: TagMeta[];
  limit?: number;
}) {
  const displayedTags = limit ? tags.slice(0, limit) : tags;
  return (
    <Stack direction="row" spacing={0.75}>
      {displayedTags.map((tag, idx) => (
        <Chip key={idx} label={tag.name} variant="tag" />
      ))}
      {limit && limit < tags.length && (
        <Chip label={`+${tags.length - limit}`} color="white" />
      )}
    </Stack>
  );
}
