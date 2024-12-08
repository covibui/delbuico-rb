import { getTag } from "@lib/tags";
import { Chip, Stack } from "@mui/material";

export default function TagRow({
  tags,
  limit,
}: {
  tags: string[];
  limit?: number;
}) {
  const displayedTags = limit ? tags.slice(0, limit) : tags;
  return (
    <Stack direction="row" spacing={0.75}>
      {displayedTags.map((slug, idx) => (
        <Chip key={idx} label={getTag(slug).name} variant="tag" />
      ))}
      {limit && limit < tags.length && (
        <Chip label={`+${tags.length - limit}`} color="white" />
      )}
    </Stack>
  );
}
