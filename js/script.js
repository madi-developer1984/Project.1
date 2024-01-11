'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

const total = document.getElementById('total');
const totalCount = document.getElementById('total-count');
const totalCountOther = document.getElementById('total-count-other');
const fullTotalCount = document.getElementById('total-full-count');
const totalCountRollback = document.getElementById('total-count-rollback');

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: () => {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start.bind(appData));
        buttonPlus.addEventListener('click', appData.addScreenBlock.bind(appData));
        inputRange.addEventListener('input', appData.handleRangeChange.bind(appData));
        resetBtn.addEventListener('click', appData.reset.bind(appData));
    },
    addTitle: () => {
        document.title = title.textContent;
    },
    start: () => {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
        appData.disableInputs(true);
    },
    showResult: () => {
        total.value = appData.screenPrice;
        totalCount.value = appData.getTotalScreensCount();
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },
    addScreens: () => {
        screens = document.querySelectorAll('.screen');
        appData.screens = [];

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            if (select.value && input.value) {
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value
                });
            }
        });
    },
    getTotalScreensCount: () => {
        return appData.screens.reduce((total, screen) => total + +screen.price, 0);
    },
    addServices: () => {
        appData.servicesPercent = {};
        appData.servicesNumber = {};

        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: () => {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: () => {
        appData.screenPrice = appData.getTotalScreensCount();
        appData.servicePricesNumber = Object.values(appData.servicesNumber).reduce((total, value) => total + value, 0);
        appData.servicePricesPercent = Object.values(appData.servicesPercent).reduce((total, value) => total + appData.screenPrice * (value / 100), 0);
        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    handleRangeChange: () => {
        appData.rollback = +inputRange.value;
        inputRangeValue.textContent = appData.rollback + '%';

        appData.addPrices();
        appData.showResult();
    },
    disableInputs: (disable) => {
        const inputs = document.querySelectorAll('.main-controls input, .main-controls select');
        inputs.forEach((input) => {
            input.disabled = disable;
        });

        startBtn.style.display = disable ? 'none' : 'block';
        resetBtn.style.display = disable ? 'block' : 'none';
    },
    reset: () => {
        screens.forEach((screen, index) => {
            if (index > 0) {
                screen.remove();
            }
        });

        appData.disableInputs(false);

        total.value = '';
        totalCount.value = '';
        totalCountOther.value = '';
        fullTotalCount.value = '';
        totalCountRollback.value = '';

        inputRange.value = 0;
        inputRangeValue.textContent = '0%';

        startBtn.style.display = 'block';
        resetBtn.style.display = 'none';
    },
};

appData.init();
