
let title = "Frontend";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1500;  
let rollback = 20;  
let fullPrice = 50000;  
let adaptive = true;


console.log("Тип данных переменной title:", typeof title);
console.log("Тип данных переменной fullPrice:", typeof fullPrice);
console.log("Тип данных переменной adaptive:", typeof adaptive);

console.log("Длина строки из переменной screens:", screens.length);

let currency = "тенге";

console.log(`Стоимость верстки экранов (${screenPrice}) ${currency}`);
console.log(`Стоимость разработки сайта (${fullPrice}) ${currency}`);

let screensArray = screens.toLowerCase().split(', ');
console.log("Массив экранов:", screensArray);

console.log("Процент отката посреднику за работу:", fullPrice * (rollback / 100));

console.log("Все проверено и работает!");
