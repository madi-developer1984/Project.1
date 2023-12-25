let title, screens, screenPrice, rollback, adaptive, service1, servicePrice1, service2, servicePrice2;

// Функция для проверки, является ли строка текстом
function isText(input) {
    return isNaN(parseFloat(input)) && !isFinite(input);
}

// Функция для проверки, является ли строка числом
function isNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

title = prompt("Как называется ваш проект?");
while (!isText(title)) {
    title = prompt("Пожалуйста, введите текст. Как называется ваш проект?");
}

screens = prompt("Какие типы экранов нужно разработать?");
while (!isText(screens)) {
    screens = prompt("Пожалуйста, введите текст. Какие типы экранов нужно разработать?");
}

screenPrice = prompt("Сколько будет стоить данная работа?");
while (!isNumber(screenPrice)) {
    screenPrice = prompt("Пожалуйста, введите число. Сколько будет стоить данная работа?");
}

rollback = prompt("Какой процент отката посреднику предусмотрен?");
while (!isNumber(rollback) || parseFloat(rollback) < 1 || parseFloat(rollback) > 100) {
    rollback = prompt("Пожалуйста, введите корректное число от 1 до 100. Какой процент отката посреднику предусмотрен?");
}

adaptive = confirm("Нужен ли адаптив на сайте?");

service1 = prompt("Какой дополнительный тип услуги нужен?");
while (!isText(service1)) {
    service1 = prompt("Пожалуйста, введите текст. Какой дополнительный тип услуги нужен?");
}

servicePrice1 = prompt("Сколько будет стоить " + service1 + "?");
while (!isNumber(servicePrice1)) {
    servicePrice1 = prompt("Пожалуйста, введите число. Сколько будет стоить " + service1 + "?");
}

service2 = prompt("Какой еще дополнительный тип услуги нужен?");
while (!isText(service2)) {
    service2 = prompt("Пожалуйста, введите текст. Какой еще дополнительный тип услуги нужен?");
}

servicePrice2 = prompt("Сколько будет стоить " + service2 + "?");
while (!isNumber(servicePrice2)) {
    servicePrice2 = prompt("Пожалуйста, введите число. Сколько будет стоить " + service2 + "?");
}

console.clear();

console.log("title:", title);
console.log("screens:", screens);
console.log("screenPrice:", screenPrice);
console.log("rollback:", rollback);
console.log("adaptive:", adaptive);
console.log("service1:", service1);
console.log("servicePrice1:", servicePrice1);
console.log("service2:", service2);
console.log("servicePrice2:", servicePrice2);
