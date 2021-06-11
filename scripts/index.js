const components = {};

let aliasesList = {
    slot: 'slot',
    locale: 'locale',
    prop: 'prop'
};

const avatar = JSON.stringify({
    div: {
        props: {
            class: 'logoBlock'
        },
        a: {
            props: {
                href: "https://vk.com"
            },
            img: {
                props: {
                    src: 'prop:logoSrc'
                }
            },
            div: 'slot:avatar',
            p: ['locale:text', 'locale:title']
        }
    }
})

const example = JSON.stringify([
    {
        div: {
            props: {
                class: 'logoBlock'
            },
            a: {
                props: {
                    href: "https://vk.com"
                },
                p: ['locale:text', 'locale:title'],
                Avatar: {
                    slots: {
                        'slot:avatar': {
                            div: 'Hello!'
                        }
                    }
                }
            }
        }
    },
    {
        div: 'locale:block'
    }
])

const editAliasesList = (list) => {
    aliasesList = { ...aliasesList, ...list };
}

const getFirstLetter = (str) => str.substr(0, 1);
const isComponent = (name) => getFirstLetter(name) === getFirstLetter(name).toUpperCase();

const parseParams = (params) => {
    if (typeof params === 'string') {
        return {
            props: null,
            content: params
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
        element.setAttribute(prop.toString().toLowerCase().trim(), props[prop].toString().trim());
    }
}

const addContent = (element, content) => {
    if (typeof content === 'string') {
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

const addAliases = (object, replacer) => {
    const clonedObject = JSON.parse(object);

    const replaceValue = (object, replacer) => {
        for (let prop in object) {
            if (typeof object[prop] !== "string") {
                replaceValue(object[prop], replacer);
            } else {
                if (hasAlias(object[prop])) {
                    const replaceValue = replacer[object[prop]];
                    if (replaceValue) object[prop] = replaceValue;
                }
            }
        }
    };

    replaceValue(clonedObject, replacer);

    return clonedObject;
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
render(example, { 'locale:block': 'Block', 'locale:text': 'Hi!', 'locale:title': 'Hello!' });
