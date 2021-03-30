# gulp4 kit (pug + scss)

## Требования
Требует nodejs старше 10

## Команды
- gulp
> Вёрстка для cms. Библиотеки переносятся в css/vendor и js/vendor
- gulp build --production
> Создание итогового проекта с минификацией

## Библиотеки

### Чистая вёрстка
- Стили библиотек (.css) копировать в src/scss/vendor.
- Скрипты библиотек (.js) копировать в src/scss/vendor.

### Вёрстка для cms
- Стили библиотек (.css) копировать в src/scss/vendor, они будут копироваться в build/css/vendor
- Скрипты библиотек (.js) копировать в src/js/vendor, они будут копироваться в build/js/vendor

## Todo
- Позже проверить обновление "rollup-plugin-commonjs": "^8.3.0" и проверить сборку зависимостей, на крайней версии 9.2.0 не работает
- Сборка не умеет конвертировать otf файлы шрифтов. Конвертацию ttf нужно тестировать. woff и woff2 файлы просто копируются
- Не работает экспорт/импорт yargs переменных
- Генерация favicon
- Рефакторинг tasks/js.js
- Проверить sourcemaps для tasks/js.js