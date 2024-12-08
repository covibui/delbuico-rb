import authors from "@meta/authors.yml";
import { AuthorContent } from "src/types";

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: AuthorContent } {
  let result: { [key: string]: AuthorContent } = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

export function getAuthor(slug: string) {
  return authorMap[slug];
}
