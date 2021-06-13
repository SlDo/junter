![Junter logo](https://github.com/SlDo/junter/blob/main/junter.png?raw=true)

Junter создан для быстрого преобразования JSON в HTML. Поддерживает мощную функциональность для необходимого преобразования.

## 🛸 Установка

1. Склонировать репозиторий
2. Подключить junter.js из dist папки

или

```
npm i junter
```

## Оглавление

1. [Использование](#usage)
2. [Методы](#methods)
3. [Концепции](#concepts)
   1. [Element props](#element-props)
   2. [Element content](#element-content)
   3. [Multiple content](#multiple-content)
   4. [Components](#components)
   4. [Aliases](#aliases)
        1. [Slot](#slot)
        2. [Locale](#locale)
        3. [Component props](#component-props)
        4. [Style](#style)
        5. [Alias](#alias)

## ⚙️ Использование
<a name="usage"></a>

💻 **Инициализация Junter**

```javascript
const junter = new Junter(settings?: Settings);

interface Settings {
    removeUnnecessary: boolean
}
```

Значение настроек  | Определение | По умолчанию
------------- | ------------- | -------------
removeUnnecessary  | Удалять alias, которые используется при рендеринге, но не были переданы | true

## 🔗 Методы
<a name="methods"></a>

#### render(object: JSON, aliases: Record<string, number | string | JSON>): HTMLElement

Используется для преобразования JSON объекта в HTML. Может иметь только **один root** элемент.

Значение переменных  | Определение
------------- | -------------
object  | JSON объект, который необходимо конвертировать
aliases  |  объект, содержащий имя и значение alias

💻 **Использование**

```javascript
const junter = new Junter();

junter.render({ "p": "Hello!" }) // <p>Hello!</p>
```

#### registerComponent(name: string, content: JSON | string | number, aliases): void

Используется для регистрации компонента. Может иметь только **один root** element.

Значение переменных  | Определение
------------- | -------------
name  | JSON объект, который необходимо конвертировать
content  |  объект, содержащий имя и значение alias
aliases  |  объект, содержащий имя и значение alias

💻 **Использование**

```javascript
const junter = new Junter();

junter.registerComponent('Avatar', { "p": "Hello!" });
```


> ⚠️ locale, alises и style aliaeses должны быть определены при создании компонента.

## 🗃 Концепции
<a name="concepts"></a>

### Element props
<a name="element-props"></a>

Позволяет указать аттрибуты для элементов

💻 **Использование**

```javascript
const junter = new Junter();

junter.render({ "div": {
    "props": {
        "class": "block"
    }
}})

/*
    <div class="block"></div>
*/
```

### Element content
<a name="element-content"></a>

Позволяет указать контент элемента

💻 **Использование**

```javascript
const junter = new Junter();

junter.render({ "div": {
    "props": {
        "class": "block"
    },
    "content": 'Block'
}})

/*
    <div class="block">Block</div>
*/
```

Если content отстутствует, то все, кроме props - преобразуется в content

```javascript
const junter = new Junter();

junter.render({ "main": {
    "props": {
        "class": "main"
    },
    "header": {},
    "div": {},
    "footer": {}
}})

/*
    <main class="main">
        <header></header>
        <div></div>
        <footer></footer>
    </main>
*/
```

Если необходимо опустить props, то можно написать content в одну строку

```javascript
const junter = new Junter();

junter.render({ "div": 'Block'})

/*
    <div>Block</div>
*/
```

> ⚠️ В root элементе не должно быть multiple  content

### Multiple content
<a name="multiple-content"></a>

Позволяет отрендерить элементы из массива данных.

💻 **Использование**

```javascript
const junter = new Junter();

junter.render({ "div": {
    "p": ['Hello!', 'Hi!', 1]
}})

/*
    <div>
        <p>Hello!</p>
        <p>Hi!</p>
        <p>1</p>
    </div>
*/
```

Если необходимо указать props компонентам, которые рендерятся из массива данных, то необходимо указать массив данных в качестве content

```javascript
const junter = new Junter();

junter.render({ "div": {
    "p": {
        "props": {
            "class": "text"
        },
        "content": ['Hello!', 'Hi!', 1]
    }
}})

/*
    <div>
        <p class="text">Hello!</p>
        <p class="text">Hi!</p>
        <p class="text">1</p>
    </div>
*/
```

В качестве multiple content можно использовать компоненты

```javascript
const junter = new Junter();

junter.render({ "div": {
    "div": {
        "props": {
            "class": "block"
        },
        "content": [
            {
               "div": {
                   "props": {
                       "class": "block"
                   },
                   "p": "Hello, world!"
               } 
            },
            {
               "div": {
                   "props": {
                       "class": "avatar"
                   },
                   "img": {
                       "props": {
                           "src": "https://example.com/image.png",
                           "alt": "avatar"
                       }
                   }
               } 
            }
        ]
    }
}})

/*
    <div>
        <div class="block">
            <div class="block">
                <p>Hello, world!</p>
            </div>
            <div class="avatar">
                <img src="https://example.com/image.png" alt="avatar" />
            </div>
        </div>
    </div>
*/
```

> ⚠️ Для рендеринга контента с дублирующимися тегами рекомендуется использовать multiple content

### Components
<a name="components"></a>

Компоненты позволяют объединять JSON объекты в одну HTML структуру.

Для их использования необходимо:

1. Зарегистрировать компонент с помощью функции **```.registerComponent()```**
2. Использовать компонент в JSON объекте, передаваемом в **```.render()```**

💻 **Использование**

```javascript
const junter = new Junter();

junter.registerComponent('Avatar', { "p": "Hello!" });

junter.render({ "div": {
    "Avatar": {}
}})

/*
    <div>
        <p>Hello!</p>
    </div>
*/
```

Основные возможности компонентов:

1. [Слоты для компонентов](#slot)
2. [Реквизиты для компонентов](#component-props)

### Aliases
<a name="aliases"></a>

Позволяют пробрасывать необходимые свойства компонентам и элементам рендеринга.

Название  | Определение
------------- | -------------
slot  | Используется для пробрасывания элементов внутрь компонентов
alias  |  Используется для подстановки контента вместо alias
prop  |  Используется для пробрасывания пропсов компонентам
style  |  Используется для вставки CSS стилей внутрь элементов
locale  |  Используется для локализации текста в элементах для рендеринга


> ⚠️ **slot** и **prop** aliases используются только в компонентах

#### Slot
<a name="slot"></a>

Позволяет пробросить элемент в любое место компонента.

💻 **Использование**

```javascript
const junter = new Junter();

junter.registerComponent('Avatar', { 
    "div": {
        "p": "Hello!", 
        "div": "slot:block"
    }
});

const elementJSON = { 
    "div": {
        "Avatar": {
            slots: {
                "slot:block": {
                    span: "Просто текст" 
                }
            }
        }
    }
};

junter.render(elementJSON);

/*
    <div>
        <div>
            <p>Hello!</p>
            <div>
                <span>Просто текст</span>
            </div>
        </div>
    </div>
*/
```

#### Locale
<a name="locale"></a>

Позволяет локализовать текст внутри элемента для рендеринга.

💻 **Использование**

```javascript
const junter = new Junter();

const componentJSON = { 
    "div": {
        "p": "Hello!", 
        "div": "locale:text"
    }
}

junter.render(componentJSON, { 'locale:text': 'Text' });

/*
    <div>
       <p>Hello!</p>
       <div>Text</div>
    </div>
*/
```

#### Component props
<a name="component-props"></a>

Позволяет передать props компоненту

💻 **Использование**

```javascript
const junter = new Junter();

junter.registerComponent('Avatar', { 
    "div": {
        "img": {
            "props": {
                "alt": "prop:imgAlt",
                "src": "prop:avatarSrc"
            }
        }
    }
});

const component = { 
    "div": {
        "Avatar": {
            props: {
                "prop:imgAlt": "avatar",
                "prop:avatarSrc": "https://example.com/user.png"
            }
        }
    }
};

junter.render(component);

/*
    <div>
       <div>
            <img alt="avatar" src="https://example.com/user.png" />
       </div>
    </div>
*/
```

#### Style
<a name="style"></a>

Позволяет добавить стили в **```<style>```**

💻 **Использование**

```javascript
const junter = new Junter();

const elementJSON = { 
    "form": {
        "style": "style:mainCSS"
    }
}

const css = `
    .target { color: red }
`

junter.render(elementJSON, { 'locale:text': 'Text', 'style:mainCSS': css });

/*
    <form>
       <style>.target { color: red }</style>
    </form>
*/
```

#### Alias
<a name="alias"></a>

Позволяет пробросить контент внутри элемента для рендеринга.

💻 **Использование**

```javascript
const junter = new Junter();

const elementJSON = { 
    "button": {
        props: {
            class: "button"
        },
        content: "alias:text"
    }
}

junter.render(elementJSON, { 'alias:text': 'Text' });

/*
    <button class="button">Text</button>
*/
```
