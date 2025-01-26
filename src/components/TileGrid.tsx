import { Box } from "@mui/material";
import GroupTile from "./GroupTile";
import { GroupMeta, RecipeMeta } from "src/types";
import RecipeTile from "./RecipeTile";

interface GroupProps {
  variant: "group";
  items: GroupMeta[];
}

interface RecipeProps {
  variant: "recipe";
  items: RecipeMeta[];
}

type Props = GroupProps | RecipeProps;

export default function TileGrid({ items, variant }: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(auto-fill, minmax(140px, 1fr))",
          sm: "repeat(auto-fill, minmax(160px, 1fr))",
          md: "repeat(auto-fill, minmax(225px, 1fr))",
        },
        gap: 2.5,
      }}
    >
      {variant === "group"
        ? items.map((item, idx) => <GroupTile key={idx} group={item} />)
        : items.map((item, idx) => <RecipeTile key={idx} recipe={item} />)}
    </Box>
  );
}
