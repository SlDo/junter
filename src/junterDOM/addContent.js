import { isElementTag } from '../utils';
import { addStyles } from './addStyles';
import { addText } from './addText';
import { addChildren } from './addChildren';

export const addContent = (element, content) => {
  if (isElementTag(element, 'style')) {
    return addStyles(element, content);
  }

  if (typeof content === 'string') {
    return addText(element, content);
  }

  if (Array.isArray(content)) {
    return content.forEach((elem) => {
      addContent(element, elem);
    });
  }

  if (content && Object.prototype.hasOwnProperty.call(content, 'content')) {
    return addContent(element, content.content);
  }

  return addChildren(element, content);
};
