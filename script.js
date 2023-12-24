let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (Пример: Простые, Сложные, Интерактивные)");
let screenPrice = parseFloat(prompt("Сколько будет стоить данная работа? (Пример: 12000)"));
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseFloat(prompt(`Сколько стоит ${service1}?`));
let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2 = parseFloat(prompt(`Сколько стоит ${service2}?`));

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice * (1 - rollback / 100));

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