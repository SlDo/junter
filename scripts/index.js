const example = [
    {
        div: {
            a: {
                props: {
                    href: "https://vk.com"
                },
                p: {
                    props: {
                        class: 'text'
                    },
                    b: 'Hello, world!',
                    span: {
                        props: {
                            class: 'subtitle'
                        },
                        div: {
                            span: {
                                p: ['Hello!', 'Hi!', 'Bonjour!']
                            }
                        },
                        span: {
                            props: {
                                class: 'main'
                            },
                            content: [
                                {
                                    p: {
                                        props: {
                                            class: 'text'
                                        },
                                        content: ["Hi!", "Hello!"]
                                    }
                                },
                                {
                                    p: "Bonjour!"
                                }
                            ]
                        }
                    }
                }
            }
        }
    },
    {
        div: null
    }
]

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

const addChildren = (element, children) => {
    for (const tag in children) {
        const { content, props } = parseParams(children[tag]);

        if (Array.isArray(content)) {
            if (content.every((elem) => typeof elem.content !== 'string')) {
                const child = createElement(tag, { props, content });

                return element.appendChild(child);
            }

            return content.forEach((elem) => {
                if (typeof elem.content === 'string') {
                    const child = createElement(tag, { props, content: elem.content });

                    return element.appendChild(child);
                }
            })
        }

        const child = createElement(tag, { props, content })

        element.appendChild(child);
    }
}

const render = (object) => {
    if (Array.isArray(object)) {
        return object.forEach((elem) => {
            render(elem);
        })
    }

    for (const tag in object) {
        console.log(createElement(tag, parseParams(object[tag])));
    }
}

render(example)
