import { isComponent, parseParams } from '../utils';
import { transformComponent } from './transformComponent';
import { createElement } from './createElement';
import { components } from './components/components.store';

export const addChildren = (element, children, aliases) => {
  Object.entries(children).forEach(([tag, params]) => {
    if (isComponent(tag) && components[tag]) {
      const { props, slots } = children[tag] || {};

      return addChildren(element, transformComponent(tag, { ...aliases, ...props, ...slots }));
    }

    const { content, props } = parseParams(params);

    if (Array.isArray(content)) {
      if (content.every((elem) => typeof elem.content !== 'string')) {
        const child = createElement(tag, { props, content });

        return element.appendChild(child);
      }

      return content.forEach((elem) => {
        if (typeof elem.content === 'string') {
          const child = createElement(tag, { props, content: elem.content });

          element.appendChild(child);
        }
      });
    }

    const child = createElement(tag, { props, content });

    return element.appendChild(child);
  });
};
