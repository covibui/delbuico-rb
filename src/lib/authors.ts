import authors from "@meta/authors.yml";
import { AuthorMeta } from "src/types";

const authorMap: { [key: string]: AuthorMeta } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: AuthorMeta } {
  let result: { [key: string]: AuthorMeta } = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

export function getAuthor(slug: string) {
  return authorMap[slug];
}
