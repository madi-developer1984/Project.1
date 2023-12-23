
var title = "Frontend";
var screens = "Простые, Сложные, Интерактивные";
var screenPrice = 1500;  
var rollback = 20;  
var fullPrice = 50000;  
var adaptive = true;


console.log("Тип данных переменной title:", typeof title);
console.log("Тип данных переменной fullPrice:", typeof fullPrice);
console.log("Тип данных переменной adaptive:", typeof adaptive);

console.log("Длина строки из переменной screens:", screens.length);

var currency = "тенге";

console.log(`Стоимость верстки экранов (${screenPrice}) ${currency}`);
console.log(`Стоимость разработки сайта (${fullPrice}) ${currency}`);

var screensArray = screens.toLowerCase().split(', ');
console.log("Массив экранов:", screensArray);

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100));

console.log("Все проверено и работает!");
