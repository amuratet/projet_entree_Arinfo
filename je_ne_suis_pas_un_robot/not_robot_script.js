var testNumber = 1;
var testSucceeded = 0;

var fruitSalad = [0, 0, 0, 0];
var partyDrink = [0, 0, 0, 0];
var transportMeans = [0, 0, 0, 0];
var flowerBouquet = [0, 0, 0, 0];

var imageNumber = 0;

function imageSwitch(posInArray){
    imageNumber++;
    if (imageNumber > 24) {
        imageNumber = 0;
    }
    switch (imageNumber) {
        case 0:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/0.png">';
        case 1:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/1.png">';
        case 2:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 1;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/2.png">';
        case 3:
            fruitSalad[posInArray] = 1;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/3.png">';
        case 4:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/4.png">';
        case 5:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/5.png">';
        case 6:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/6.png">';
        case 7:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 1;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/7.png">';
        case 8:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 1;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/8.png">';
        case 9:
            fruitSalad[posInArray] = 1;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/9.png">';
        case 10:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/10.png">';
        case 11:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/11.png">';
        case 12:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 1;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/12.png">';
        case 13:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/13.png">';
        case 14:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/14.png">';
        case 15:
            fruitSalad[posInArray] = 1;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/15.png">';
        case 16:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/16.png">';
        case 17:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 1;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/17.png">';
        case 18:
            fruitSalad[posInArray] = 1;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/18.png">';
        case 19:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/19.png">';
        case 20:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/20.png">';
        case 21:
            fruitSalad[posInArray] = 1;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/21.png">';
        case 22:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 1;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/22.png">';
        case 23:
            fruitSalad[posInArray] = 1;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 0;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/23.png">';
        case 24:
            fruitSalad[posInArray] = 0;
            flowerBouquet[posInArray] = 0;
            transportMeans[posInArray] = 0;
            partyDrink[posInArray] = 1;
            return '<p class="cliquez">Cliquez</p><img src="../images/bank1/24.png">';
        default:
            alert('Erreur dans la fonction "imageSwitch()"');
    }
}

function whichArray() {
    switch (testNumber) {
        case 1: return fruitSalad;
        case 2: return partyDrink;
        case 3: return transportMeans;
        case 4: return flowerBouquet;
        default: alert('Erreur dans la fonction "whichArray()"');
    }
}

function nextTest() {
    testNumber++;
    if (testNumber > 4) {
        testNumber = 0;
    }
    var h2TestState = document.getElementById('displayTestState');
    switch (testNumber) {
        case 1:
    }
}

// var testValidate = document.getElementById('checkTestButton');
// testValidate.addEventListener('click', displayTestCheckResult);
    