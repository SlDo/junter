import { addContent } from './addContent';
import { addProps } from './addProps';

export const createElement = (tag, params) => {
  const { props, content } = params || {};

  const element = document.createElement(tag);

  if (content) addContent(element, content);
  if (props) addProps(element, props);

  return element;
};
