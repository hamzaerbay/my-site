export const randomIntFromRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomColor = (colors: string[]): string => {
  return colors[Math.floor(Math.random() * colors.length)];
};
