const normalizePath = (path: string): string[] =>
  path
    .replace(/\/index$/, "/")
    .replace(/^(wiki|blog)\//, "")
    .split(/(\.|\/)/)
    .filter((w) => w !== "" && w !== "." && w !== "/");

const normalizeTitle = (title: string): string => {
  if (title.includes(" - ")) return title.substring(0, title.indexOf(" - "));
  return title;
};

const extractLocale = (path: string[]): [string[], string] => {
  const str = path.join("/");
  const match = /\/(en-US|ja-JP)$/.exec(str);
  if (match) {
    const newPath = str.replace(match[1], "");

    return [
      normalizePath(newPath.substring(0, newPath.lastIndexOf("/"))),
      match[1],
    ];
  }

  return [path, undefined];
};

const isArrayEquals = (a: string[], b: string[]): boolean =>
  a.every((w) => b.includes(w));

export { normalizePath, normalizeTitle, extractLocale, isArrayEquals };
