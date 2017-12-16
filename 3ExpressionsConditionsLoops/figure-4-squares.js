function printFigureOf4Squares(n) {

    let totalRows = n;
    if (n % 2 === 0) {

        totalRows -= 1;
    }

    let result = "";
    let dashOrSpaceCount = ((2 * n - 1) - 3) / 2; // total symbols on row minus the three "+" or "|" then divided by two
    let middleRow = Math.floor((n - 1) / 2);

    for (let row = 0; row < totalRows; row++) {

        let plusOrPipe = "|";
        let dashOrSpace = " ";

        // first row, middle row, last row
        if (row === 0 || row === middleRow || row === totalRows - 1) {

            plusOrPipe = "+";
            dashOrSpace = "-";
        }

        result += `${plusOrPipe}${dashOrSpace.repeat(dashOrSpaceCount)}${plusOrPipe}${dashOrSpace.repeat(dashOrSpaceCount)}${plusOrPipe}\n`;
    }

    return result;
}