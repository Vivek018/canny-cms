export const separateWords = (title: string, splitVal = -1) => {
  const words = title.split(" ");
  return [words.slice(0, splitVal).join(" "), words.pop()!];
};
