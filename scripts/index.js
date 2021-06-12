const components = {};

const aliasesList = {
  slot: 'slot',
  locale: 'locale',
  prop: 'prop',
  style: 'style',
  alias: 'alias',
};

const avatar = JSON.stringify({
  div: {
    props: {
      class: 'logoBlock',
    },
    a: {
      props: {
        href: 'https://vk.com',
      },
      img: {
        props: {
          src: 'prop:logoSrc',
          'tab-index': 'Hello!',
        },
      },
      p: ['locale:text', 'locale:title'],
      div: 'slot:avatar',
      ul: {
        props: {
          class: 'names',
        },
        li: {
          props: {
            class: 'list',
          },
          content: [0, 'locale:string', 2, 3, 4, 5],
        },
      },
    },
  },
});

const example = JSON.stringify([
  {
    div: {
      Avatar: {},
      div: 'prop:alias',
      button: 'locale:button',
    },
  },
]);

const getFirstLetter = (str) => str.substr(0, 1);
const isComponent = (name) => getFirstLetter(name) === getFirstLetter(name).toUpperCase();
const throwError = (condition, msg) => {
  if (condition) throw new Error(msg);
};

const parseParams = (params) => {
  const type = typeof params;

  if (type === 'string' || type === 'number') {
    return {
      props: null,
      content: params.toString(),
    };
  }

  if (Array.isArray(params)) {
    return {
      props: null,
      content: params.map((param) => parseParams(param)),
    };
  }

  if (params && Object.prototype.hasOwnProperty.call(params, 'content')) {
    const { props, content } = params || {};

    return {
      props, content: parseParams(content).content,
    };
  }

  const { props, ...content } = params || {};

  return { props, content };
};

const createElement = (tag, params) => {
  const { props, content } = params || {};

  const element = document.createElement(tag);

  if (content) addContent(element, content);
  if (props) addProps(element, props);

  return element;
};

const addProps = (element, props) => {
  for (const prop in props) {
    throwError(props[prop] == null || typeof props[prop] === 'object', `Invalid prop value. The prop value must be a string or number. Current type: ${typeof props[prop]}. Error: ${prop}: ${props[prop]}`);

    element.setAttribute(prop.toString().toLowerCase().trim(), props[prop].toString().trim());
  }
};

const isElementTag = (element, tagName) => element.nodeName === tagName.toUpperCase();

const addStyles = (element, styles) => {
  if (isElementTag(element, 'style')) {
    if (element.styleSheet) {
      element.styleSheet.cssText = styles.trim();
    } else {
      element.appendChild(document.createTextNode(styles.trim()));
    }
  }
};

const addContent = (element, content) => {
  if (isElementTag(element, 'style')) {
    addStyles(element, content);
  } else if (typeof content === 'string') {
    element.innerHTML = content;
  } else if (Array.isArray(content)) {
    return content.forEach((elem) => {
      addContent(element, elem);
    });
  } else {
    if (content && Object.prototype.hasOwnProperty.call(content, 'content')) {
      return addContent(element, content.content);
    }

    addChildren(element, content);
  }
};

const aliasName = (alias) => {
  const aliasObject = /^(.*?):/g.exec(alias);

  if (aliasObject) return aliasObject[1];

  return null;
};

const hasAlias = (alias) => {
  const aliasType = aliasName(alias);

  if (aliasType) return !!aliasesList[aliasType];

  return false;
};

const addAliases = (object, replacer, excludeDelete = []) => {
  try {
    const clonedObject = JSON.parse(object);

    const replaceValue = (object, replacer) => {
      for (const prop in object) {
        const value = object[prop];

        if (typeof value !== 'string') {
          replaceValue(value, replacer);
        } else if (hasAlias(value)) {
          const replacedValue = replacer[value];

          if (!replacedValue && excludeDelete && !excludeDelete.includes(aliasName(value))) {
            delete object[prop];
          }

          if (replacedValue) object[prop] = replacedValue;
        }
      }
    };

    replaceValue(clonedObject, replacer);

    return clonedObject;
  } catch (e) {
    throwError(!!e, `Invalid JSON. Error message: ${e}`);
  }
};

const addComponent = (element, name, props) => {
  const component = addAliases(components[name], props);

  addContent(element, component);
};

const addChildren = (element, children, aliases) => {
  for (const tag in children) {
    if (isComponent(tag) && components[tag]) {
      const { props, slots } = children[tag] || {};

      addComponent(element, tag, { ...aliases, ...props, ...slots }, slots);
      continue;
    }

    const { content, props } = parseParams(children[tag]);

    if (Array.isArray(content)) {
      if (content.every((elem) => typeof elem.content !== 'string')) {
        const child = createElement(tag, { props, content });

        element.appendChild(child);
      } else {
        content.forEach((elem) => {
          if (typeof elem.content === 'string') {
            const child = createElement(tag, { props, content: elem.content });

            element.appendChild(child);
          }
        });
      }

      continue;
    }

    const child = createElement(tag, { props, content });

    element.appendChild(child);
  }
};

const render = (object, aliases) => {
  const parsed = addAliases(object, aliases);

  if (Array.isArray(parsed)) {
    return parsed.forEach((param) => {
      for (const tag in param) {
        // TODO: Рендеринг компонентов на верхнем уровне
        console.log(createElement(tag, parseParams(param[tag]), aliases));
      }
    });
  }

  for (const tag in parsed) {
    // TODO: Рендеринг компонентов на верхнем уровне
    console.log(createElement(tag, parseParams(parsed[tag]), aliases));
  }
};

const registerComponent = (name, content, aliases) => {
  throwError(!isComponent(name), 'The component name must start with a capital letter');

  components[name] = JSON.stringify(addAliases(content, aliases, ['slot', 'prop']));
};

registerComponent('Avatar', avatar, { 'locale:text': 'Hi!', 'locale:title': 'Hello!' });
render(example, { 'prop:alias': 'Hello!' });
