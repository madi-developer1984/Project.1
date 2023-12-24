let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать? (Пример: Простые, Сложные, Интерактивные)");

let screenPrice;
do {
    let screenPriceInput = prompt("Сколько будет стоить данная работа? (Пример: 12000)");
    screenPrice = parseFloat(screenPriceInput);
} while (isNaN(screenPrice));

let rollbackInput = prompt("Какой процент отката посреднику предусмотрен? (Пример: 10)");

while (isNaN(rollbackInput)) {
    rollbackInput = prompt("Введите корректное значение процента отката (число от 1 до 100):");
}
let rollback = parseFloat(rollbackInput);

let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1Input = prompt("Сколько будет стоить " + service1 + "?");

while (isNaN(servicePrice1Input)) {
    servicePrice1Input = prompt("Введите корректное значение стоимости услуги " + service1 + ":");
}
let servicePrice1 = parseFloat(servicePrice1Input);

let service2 = prompt("Какой еще дополнительный тип услуги нужен?");
let servicePrice2Input = prompt("Сколько будет стоить " + service2 + "?");

while (isNaN(servicePrice2Input)) {
    servicePrice2Input = prompt("Введите корректное значение стоимости услуги " + service2 + ":");
}
let servicePrice2 = parseFloat(servicePrice2Input);

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
