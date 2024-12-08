import groups from "@meta/groups.yml";
import { countRecipes } from "./recipes";
import { GroupContent } from "src/types";

function generateGroupMap(): { [key: string]: GroupContent } {
  let result: { [key: string]: GroupContent } = {};
  for (const group of groups.groups) {
    result[group.slug] = { ...group, count: countRecipes("group", group.slug) };
  }
  return result;
}

const groupMap: { [key: string]: GroupContent } = generateGroupMap();

export function getGroup(slug: string) {
  return groupMap[slug];
}

export function listGroups(): GroupContent[] {
  return Object.values(groupMap);
}
