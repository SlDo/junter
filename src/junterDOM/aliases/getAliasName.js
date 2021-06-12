export const aliasName = (alias) => {
  const aliasObject = /^(.*?):/g.exec(alias);

  if (aliasObject) return aliasObject[1];

  return null;
};
