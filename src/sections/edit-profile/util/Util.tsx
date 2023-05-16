export const nameShortner = (name: string) => {
  if (name.length <= 10) return name;
  return (
    name.slice(0, 4) + ".." + name.slice(name.lastIndexOf("."), name.length)
  );
};
