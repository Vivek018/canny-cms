
export const separateWords = (title: string) => {
  const words = title.split(" ");
  return [words.slice(0, -1).join(" "), words.pop()!];
};
