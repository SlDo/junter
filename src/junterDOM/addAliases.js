import { throwError } from '../utils';
import { hasAlias, aliasName } from './aliases';
import { settings } from '../settings';

export const addAliases = (object, replacer = {}, excludeDelete = []) => {
  throwError(typeof replacer !== 'object' || Array.isArray(replacer), 'Replacer must be an object');

  try {
    const clonedObject = JSON.parse(object);

    const replaceValue = (objectToReplace) => {
      Object.entries(objectToReplace).forEach(([prop, value]) => {
        if (typeof value !== 'string') {
          return replaceValue(value);
        }

        if (hasAlias(value)) {
          const replacedValue = replacer[value];

          if (!replacedValue && excludeDelete && !excludeDelete.includes(aliasName(value)) && settings.removeUnnecessary) {
            if (Array.isArray(objectToReplace)) {
              return objectToReplace.splice(+prop, 1);
            }

            delete objectToReplace[prop];
          } else objectToReplace[prop] = replacedValue == null ? value : replacedValue;
        }
      });
    };

    replaceValue(clonedObject, replacer);

    return clonedObject;
  } catch (e) {
    return throwError(!!e, `Invalid JSON. Error message: ${e}`);
  }
};
