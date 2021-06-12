export const settings = {
  removeUnnecessary: true,
};

export const editSetting = (name, value) => {
  if (settings[name]) settings[name] = value;
};
