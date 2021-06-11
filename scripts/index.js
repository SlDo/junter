const components = {};

let aliasesList = {
    slot: 'slot',
    locale: 'locale',
    prop: 'prop',
    style: 'style',
    alias: 'alias'
};

const avatar = JSON.stringify({
    div: {
        props: {
            class: 'logoBlock'
        },
        a: {
            props: {
                href: 'https://vk.com'
            },
            img: {
                props: {
                    src: 'prop:logoSrc',
                    'tab-index': 1
                }
            },
            p: ['locale:text', 'locale:title'],
            div: 'slot:avatar',
            ul: {
                props: {
                    class: 'names'
                },
                li: {
                    props: {
                        class: 'list'
                    },
                    content: [0, 1, 2, 3, 4, 5]
                }
            },
        }
    }
})

const example = JSON.stringify([
    {
        form: {
            props: {
                type: 'submit'
            },
            p: 'locale:welcome',
            Avatar: {
                props: {
                    'prop:logoSrc': 'http://vk.com/img.png'
                },
                slots: {
                    'slot:avatar': {
                        Avatar: {
                            slots: {
                                'slot:avatar': {
                                    div: 'locale:welcome'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
])

const getFirstLetter = (str) => str.substr(0, 1);
const isComponent = (name) => getFirstLetter(name) === getFirstLetter(name).toUpperCase();

const parseParams = (params) => {
    const type = typeof params;

    if (type === 'string' || type === 'number') {
        return {
            props: null,
            content: params.toString()
        }
    } else if (Array.isArray(params)) {
        return {
            props: null,
            content: params.map((param) => parseParams(param))
        }
    } else if (params && params.hasOwnProperty('content')) {
        const { props, content } = params || {};

        return {
            props, content: parseParams(content).content
        }
    }

    const { props, ...content } = params || {};

    return { props, content };
}

const createElement = (tag, params) => {
    const { props, content } = params || {};

    const element = document.createElement(tag);

    if (content) addContent(element, content);
    if (props) addProps(element, props);

    return element;
}

const addProps = (element, props) => {
    for (const prop in props) {
        if (props[prop] == null) throw new Error(`Invalid prop value. The prop value must be a string or number. Error: ${prop}: ${props[prop]}`);

        element.setAttribute(prop.toString().toLowerCase().trim(), props[prop].toString().trim());
    }
}

const isElementTag = (element, tagName) => element.nodeName === tagName.toUpperCase();

const addStyles = (element, styles) => {
    if (isElementTag(element, 'style')) {
        if (element.styleSheet) {
            element.styleSheet.cssText = styles.trim();
        } else {
            element.appendChild(document.createTextNode(styles.trim()));
        }
    }
}

const addContent = (element, content) => {
    if (isElementTag(element, 'style')) {
        addStyles(element, content);
    } else if (typeof content === 'string') {
        element.innerHTML = content;
    } else if (Array.isArray(content)) {
        content.forEach((elem) => {
            addContent(element, elem);
        })
    } else {
        if (content.hasOwnProperty('content')) {
            return addContent(element, content.content);
        }

        addChildren(element, content);
    }
}

const hasAlias = (alias) => {
    const value = /^(.*?)\:/g.exec(alias);

    if (value) return !!aliasesList[value[1]];
}

const addAliases = (object, replacer, excludeDelete = []) => {
    try {
        const clonedObject = JSON.parse(object);

        const replaceValue = (object, replacer) => {
            for (let prop in object) {
                const value = object[prop];

                if (typeof value !== "string") {
                    replaceValue(value, replacer);
                } else {
                    if (hasAlias(value)) {
                        const replacedValue = replacer[value];

                        if (replacedValue) object[prop] = replacedValue
                    }
                }
            }
        };

        replaceValue(clonedObject, replacer);

        return clonedObject;
    } catch (e) {
        throw new Error(`Invalid JSON. Error message: ${e}`)
    }
};

const addComponent = (element, name, props) => {
    const component = addAliases(components[name], props);

    addContent(element, component);
}

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
                })
            }

            continue;
        }

        const child = createElement(tag, { props, content })

        element.appendChild(child);
    }
}

const render = (object, aliases) => {
    const parsed = addAliases(object, aliases);

    if (Array.isArray(parsed)) {
        return parsed.forEach((param) => {
            for (const tag in param) {
                //TODO: Рендеринг компонентов на верхнем уровне
                console.log(createElement(tag, parseParams(param[tag]), aliases));
            }
        })
    }

    for (const tag in parsed) {
        //TODO: Рендеринг компонентов на верхнем уровне
        console.log(createElement(tag, parseParams(parsed[tag]), aliases));
    }
}

const registerComponent = (name, content, aliases) => {
    if (!isComponent(name)) throw new Error('The component name must start with a capital letter');

    components[name] = JSON.stringify(addAliases(content, aliases));
}

registerComponent('Avatar', avatar, { 'locale:text': 'Hi!', 'locale:title': 'Hello!' });
render(example, { 'locale:block': 'Block', 'locale:text': 'Hi!', 'locale:title': 'Hello!', 'locale:welcome': 'Welcome!' });
