var getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return screenPrice + getAllServicePrices();
}
var fullPrice = getFullPrice();  

function getTitle() {
    return title.replace(/\b\w/g, (match) => match.toUpperCase());
}
var formattedTitle = getTitle(); 

function getServicePercentPrices() {
    return Math.ceil(fullPrice * (1 - rollback / 100));
}
var servicePercentPrice = getServicePercentPrices();

console.clear(); 

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("Типы экранов для разработки:", screens);

getRollbackMessage();

console.log("Стоимость за вычетом процента отката посреднику:", servicePercentPrice);

console.log("Все проверено и работает!");