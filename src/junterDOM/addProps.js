import { throwError } from '../utils';

export const addProps = (element, props) => {
  Object.entries(props).forEach(([prop, value]) => {
    throwError(value == null || typeof value === 'object', `Invalid prop value. The prop value must be a string or number. Current type: ${typeof props[prop]}. Error: ${prop}: ${props[prop]}`);

    element.setAttribute(prop.toString().toLowerCase().trim(), value.toString().trim());
  });
};
