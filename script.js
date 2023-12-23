var title = prompt("Как называется ваш проект?");
var screens = prompt("Какие типы экранов нужно разработать? (Пример: Простые, Сложные, Интерактивные)");
var screenPrice = parseFloat(prompt("Сколько будет стоить данная работа? (Пример: 12000)"));
var rollback = parseFloat(prompt("Какой процент отката посреднику предусмотрен? (Пример: 10)"));
var adaptive = confirm("Нужен ли адаптив на сайте?");

var service1 = prompt("Какой дополнительный тип услуги нужен?");
var servicePrice1 = parseFloat(prompt("Сколько будет стоить " + service1 + "?"));
var service2 = prompt("Какой еще дополнительный тип услуги нужен?");
var servicePrice2 = parseFloat(prompt("Сколько будет стоить " + service2 + "?"));

var getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return screenPrice + getAllServicePrices();
}
var fullPrice = getFullPrice(); 

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
console.log("fullPrice:", fullPrice);