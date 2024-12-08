import { GroupContent } from "@lib/groups";
import Tile from "./Tile";
import { Typography } from "@mui/material";

export default function GroupTile({ group }: { group: GroupContent }) {
  return (
    <Tile name={group.name} href={`/groups/${group.slug}`} image={group.image}>
      <Typography sx={{ fontSize: { xs: 10, lg: 12 }, fontWeight: 300 }}>
        {group.count} items
      </Typography>
    </Tile>
  );
}
