var title = prompt("Как называется ваш проект?");
var screens = prompt("Какие типы экранов нужно разработать? (Пример: Простые, Сложные, Интерактивные)");
var screenPrice = parseFloat(prompt("Сколько будет стоить данная работа? (Пример: 12000)"));
var adaptive = confirm("Нужен ли адаптив на сайте?");

var service1 = prompt("Какой дополнительный тип услуги нужен?");
var servicePrice1 = parseFloat(prompt(`Сколько стоит ${service1}?`));
var service2 = prompt("Какой еще дополнительный тип услуги нужен?");
var servicePrice2 = parseFloat(prompt(`Сколько стоит ${service2}?`));

var fullPrice = screenPrice + servicePrice1 + servicePrice2;

var servicePercentPrice = Math.ceil(fullPrice * (1 - rollback / 100));

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice > 0 && fullPrice <= 15000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что-то пошло не так");
}

console.log("Все проверено и работает!");

// Шаг 11: Добавить папку с третьим уроком в репозиторий на GitHub
// Предполагается, что у вас уже есть локальный репозиторий и связь с удаленным репозиторием

// Создаем и переходим в новую ветку
// git checkout -b lesson03 (в терминале)
// git add script.js (в терминале)
// git commit -m "Добавлены переменные и выполнены задачи" (в терминале)
// git push origin lesson03 (в терминале)
