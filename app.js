// let oneEuroIs = {                  ----> Echange ratios.
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro) {
    // Convert value to dollars
    let valueInDollar = valueInEuro * 1.07;
    // Return value in dollars
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar /1.07 * 156;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = valueInYen /1.07 * 0.87;
    return valueInPound;
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
