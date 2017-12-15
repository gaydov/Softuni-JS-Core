function roundNum([num, precision]) {

    if (precision > 15) {
        precision = 15;
    }

    let numString = num.toFixed(precision);
    return Number(numString);
}