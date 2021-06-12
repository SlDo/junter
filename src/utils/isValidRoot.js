export const isValidRoot = (object) => typeof object === 'object' && !Array.isArray(object) && Object.keys(object).length === 1;
