
export const separateWords = (title: string, splitIndex = -1) => {
  const words = title?.split(" ");
  return [
    words?.slice(0, splitIndex).join(" "),
    words?.slice(splitIndex, words?.length).join(" "),
  ];
};
