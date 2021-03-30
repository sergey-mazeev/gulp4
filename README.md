# gulp4 kit (pug + scss)

## Требования
Требует nodejs старше 10

## Команды
- gulp
> Вёрстка для cms. Библиотеки переносятся в css/vendor и js/vendor
- gulp build --production
> Создание итогового проекта с минификацией

## SSL Сертификат
- Раскомментировать в gulp/tasks/browsersync.js блок с https
- Перейти в папку src/ssl
- openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 3650
- Открыть https://localhost:3000 Пока сертификат не работает
- Открыть Developer Tools > Security > View Certificate. Картинку сертификата переместить на рабочий стол. И нажать 2 раза
- Нажать 'Add'
- Find it in Keychain Access and double click it
- Expand 'Trust' and change 'When using this certificate' to 'Always trust'.
- Может потребоваться авторизоваться.
- Перезапустить gulp
- Перезапустить браузер

## Библиотеки

### Чистая вёрстка
- Стили библиотек (.css) копировать в src/scss/vendor.
- Скрипты библиотек (.js) копировать в src/scss/vendor.

### Вёрстка для cms
- Стили библиотек (.css) копировать в src/scss/vendor, они будут копироваться в build/css/vendor
- Скрипты библиотек (.js) копировать в src/js/vendor, они будут копироваться в build/js/vendor

## Todo
- Сборка не умеет конвертировать otf файлы шрифтов. Конвертацию ttf нужно тестировать. woff и woff2 файлы просто копируются
- Не работает экспорт/импорт yargs переменных
- Генерация favicon
- Рефакторинг tasks/js.js
- Проверить sourcemaps для tasks/js.js