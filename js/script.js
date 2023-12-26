const calculatorTitle = document.getElementsByTagName('h1')[0];

const calculateBtns = document.getElementsByClassName('handler_btn');
const calculateBtn = calculateBtns[0];
const resetBtn = calculateBtns[1];

const plusBtn = document.querySelector('.screen-btn');

const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');

const rangeInput = document.querySelector('.rollback input[type="range"]');

const rangeValueSpan = document.querySelector('.rollback .range-value');

const totalInputs = document.getElementsByClassName('total-input');

let screenBlocks = document.querySelectorAll('.screen');

console.log('Calculator Title:', calculatorTitle);
console.log('Calculate Button:', calculateBtn);
console.log('Reset Button:', resetBtn);
console.log('Plus Button:', plusBtn);
console.log('Percent Items:', percentItems);
console.log('Number Items:', numberItems);
console.log('Range Input:', rangeInput);
console.log('Range Value Span:', rangeValueSpan);
console.log('Total Inputs:', totalInputs);
console.log('Screen Blocks:', screenBlocks);
