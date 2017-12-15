function calcDeposit([sum, interest, months, years]) {

    // Formula: P * (1 + i/n)^(nt)
    let p = sum;
    let i = interest / 100;
    let n = 12 / months;

    let compoundInterest = p * Math.pow((1 + i / n), n * years);
    return compoundInterest.toFixed(2);
}