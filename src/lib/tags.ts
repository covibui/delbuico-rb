import tags from "@meta/tags.yml";
import { TagMeta } from "src/types";

const tagMap: { [key: string]: TagMeta } = generateTagMap();

function generateTagMap(): { [key: string]: TagMeta } {
  let result: { [key: string]: TagMeta } = {};
  for (const tag of tags.tags) {
    result[tag.slug] = tag;
  }
  return result;
}

export function getTag(slug: string) {
  return tagMap[slug];
}

export function getTags(slugs: string[]) {
  return slugs.map((slug) => getTag(slug));
}

export function listTags(): TagMeta[] {
  return tags.tags;
}
