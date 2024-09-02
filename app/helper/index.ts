export const reverseString = (str: string): string => {
  const mid = Math.floor(str.length / 2);
  const firstHalf = str.slice(0, mid);
  const secondHalf = str.slice(mid).split("").reverse().join("");
  return firstHalf + secondHalf;
};
