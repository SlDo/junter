import { getFirstLetter } from './getFirstLetter';

export const isComponent = (name) => getFirstLetter(name) === getFirstLetter(name).toUpperCase();
