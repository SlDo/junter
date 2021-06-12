import { isElementTag } from '../utils';

export const addStyles = (element, styles) => {
  if (isElementTag(element, 'style')) {
    if (element.styleSheet) {
      element.styleSheet.cssText = styles.trim();
    } else {
      element.appendChild(document.createTextNode(styles.trim()));
    }
  }
};
