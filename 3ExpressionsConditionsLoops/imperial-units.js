function convertInchesToFeet(inches) {

    let feet = Math.floor(inches / 12);
    let inchesResult = inches % 12;

    return `${feet}'-${inchesResult}\"`;
}