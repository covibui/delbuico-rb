import groups from "@meta/groups.yml";
import { countRecipes } from "./recipes";
import { GroupMeta } from "src/types";

function generateGroupMap(): { [key: string]: GroupMeta } {
  let result: { [key: string]: GroupMeta } = {};
  for (const group of groups.groups) {
    result[group.slug] = { ...group, count: countRecipes("group", group.slug) };
  }
  return result;
}

const groupMap: { [key: string]: GroupMeta } = generateGroupMap();

export function getGroup(slug: string) {
  return groupMap[slug];
}

export function listGroups(): GroupMeta[] {
  return Object.values(groupMap);
}
