import { GroupMeta } from "src/types";
import Tile from "./Tile";
import { Typography } from "@mui/material";

export default function GroupTile({ group }: { group: GroupMeta }) {
  return (
    <Tile name={group.name} href={`/groups/${group.slug}`} image={group.image}>
      <Typography variant="textSm">{group.count} items</Typography>
    </Tile>
  );
}
