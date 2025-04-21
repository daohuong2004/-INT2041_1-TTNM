export function parseGlossary(text: string): { [key: string]: number } {
  const glossary: { [key: string]: number } = {};
  text.split("\n").forEach((line) => {
    const [id, word] = line.trim().split("\t");
    if (word) glossary[word] = parseInt(id, 10);
  });
  return glossary;
}
