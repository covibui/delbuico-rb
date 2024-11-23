export default function pluralize(word: string, count: number, explicitPlural?: string) {
  return count > 1 || count === 0 ? explicitPlural || `${word}s` : word
}