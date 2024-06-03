const woodCosts = {
    "Abete": { density: 470, cost: 1025.00 },
    "Pino": { density: 500, cost: 1150.00 },
    "Pioppo": { density: 420, cost: 1275.00 },
    "Olmo": { density: 600, cost: 1500.00 },
    "Frassino": { density: 680, cost: 2000.00 },
    "Acero": { density: 600, cost: 2250.00 },
    "Betulla": { density: 650, cost: 2500.00 },
    "Radica di Pioppo": { density: 430, cost: 2500.00 },
    "Larice": { density: 590, cost: 2750.00 },
    "Castagno Americano": { density: 540, cost: 4250.00 },
    "Cedro Libanese": { density: 560, cost: 4375.00 },
    "Rovere": { density: 720, cost: 5750.00 },
    "Noce Americano": { density: 650, cost: 6250.00 },
    "Radica di Ulivo": { density: 930, cost: 9875.00 },
    "Ulivo": { density: 920, cost: 10750.00 }
};

const legCosts = [
    95, 290, 340, 210, 390, 300, 375, 490, 150, 170, 
    420, 180, 430, 190, 55, 500, 130, 100, 470, 1600, 
    180, 460, 280, 230, 220, 150, 400, 200, 50, 230, 
    900, 270, 360, 300, 200, 341, 480
];

function priceFormula(woodCost, resinCost, legCost, extraCosts) {
    return (woodCost + resinCost + legCost + extraCosts + 50) * 1.05 * 1.45;
}

function calculateWoodCost(woodType, tableVolume, woodRation) {
    let woodAmount = tableVolume * woodRation / 100;
    let totalCost = woodCosts[woodType].cost * woodAmount;
    return Math.ceil(totalCost * 100) / 100;
}

function calculateResinCost(resinQuantity, resinCostPerKg, tableVolume, resinRation) {
    resinQuantity = tableVolume * resinRation / 100;
    return (resinQuantity * 1200 * resinCostPerKg).toFixed(2);
}

function calculateLegCost(legNumber) {
    return legCosts[legNumber - 1];
}

// Parametreler
let length = 180;
let width = 90;
let thickness = 4;
let woodRation = 75;
let resinRation = 25;
let resinCostPerKg = 20;
let extraCosts = 50;
let legNumber = 35;
let woodType = "Pino";

// Masa hacmi hesaplama
let tableVolume = length * width * thickness / 1000000;

// Maliyet hesaplamaları
let woodCost = calculateWoodCost(woodType, tableVolume, woodRation);
let resinCost = calculateResinCost(resinRation, resinCostPerKg, tableVolume, resinRation);
let legCost = calculateLegCost(legNumber);

// Toplam fiyat hesaplama
let totalCost = priceFormula(parseFloat(woodCost), parseFloat(resinCost), legCost, extraCosts);

let url = `https://rosybrown-mole-829968.hostingersite.com/?custom_add_to_cart=1&product_name=Özel%20Ürün&quantity=1&length=${length}&width=${width}&thickness=${thickness}&woodRation=${woodRation}&resinRation=${resinRation}&resinCostPerKg=${resinCostPerKg}&extraCosts=${extraCosts}&legNumber=${legNumber}&woodType=${woodType}`;

console.log("Ahşap Maliyeti: " + woodCost);
console.log("Reçine Maliyeti: " + resinCost);
console.log("Ayak Maliyeti: " + legCost);
console.log("Toplam Maliyet: " + totalCost.toFixed(2));
console.log("Oluşturulan URL: " + url);

