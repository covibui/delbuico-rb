import tags from "@meta/tags.yml";
import { TagContent } from "src/types";

const tagMap: { [key: string]: TagContent } = generateTagMap();

function generateTagMap(): { [key: string]: TagContent } {
  let result: { [key: string]: TagContent } = {};
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

export function listTags(): TagContent[] {
  return tags.tags;
}
