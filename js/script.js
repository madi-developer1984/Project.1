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
    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('input', appData.handleRangeChange);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.showResult();
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCount.value = appData.getTotalScreensCount();
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        appData.screens = [];

        screens.forEach(function (screen, index) {
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
    getTotalScreensCount: function () {
        return appData.screens.reduce((total, screen) => total + +screen.price, 0);
    },
    addServices: function () {
        appData.servicesPercent = {};
        appData.servicesNumber = {};

        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        appData.screenPrice = appData.getTotalScreensCount();
        appData.servicePricesNumber = Object.values(appData.servicesNumber).reduce((total, value) => total + value, 0);
        appData.servicePricesPercent = Object.values(appData.servicesPercent).reduce((total, value) => total + appData.screenPrice * (value / 100), 0);
        appData.fullPrice = appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    handleRangeChange: function () {
        appData.rollback = +inputRange.value;
        inputRangeValue.textContent = appData.rollback + '%';

        appData.addPrices();

        appData.showResult();
    },
};

appData.init();
