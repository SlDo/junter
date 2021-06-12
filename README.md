## Установка

Оптимизированная сборка находится в папке ```dist```

или

```
npm i junter
```

## Использование

💻 **Ининиализация Junter**

```javascript
const junter = new Junter(settings?: Settings);

interface Settings {
    removeUnnecessary: boolean
}
```

Значение настроек  | Определение
------------- | -------------
removeUnnecessary  | Удалять параметры, которые используется при рендеринге, но не были переданы

## Методы

#### render(object: JSON, aliases: Record<string, number | string | JSON>)

Используется для преобразования JSON объекта в HTML. Может иметь только один root элемент.

Значение переменных  | Определение
------------- | -------------
object  | JSON объект, который необходимо конвертировать
aliases  |  объект, содержащий имя и значение alias

💻 **Использование**

```javascript
    const junter = new Junter();
    
    junter.render({ "p": "Hello!" }) // <p>Hello!</p>
```

#### registerComponent(name: string, content: JSON | string | number, aliases)

Используется для регистрации компонента. Может иметь только один root element.

Значение переменных  | Определение
------------- | -------------
name  | JSON объект, который необходимо конвертировать
content  |  объект, содержащий имя и значение alias
aliases  |  объект, содержащий имя и значение alias

💻 **Использование**

```javascript
    const junter = new Junter();
    
    junter.render({ "p": "Hello!" }) // <p>Hello!</p>
```

## Концепции

### Aliases

Позволяют пробрасывать необходимые свойства компонентам рендеринга. 

Имя alias  | Определение
------------- | -------------
slot  | Используется для пробрасывания элементов внутрь компонентов
alias  |  Используется для подстановки контента вместо alias
prop  |  Используется для пробрасывания пропсов компонентам
style  |  Используется для вставки CSS стилей внутрь элементов
locale  |  Используется для локализации текста в элементах для рендеринга

## Лицензия

[Apache 2.0](https://github.com/SlDo/skylite-cli/blob/main/LICENSE)



