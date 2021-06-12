export const throwError = (condition, msg) => {
  if (condition) throw new Error(msg);
};
