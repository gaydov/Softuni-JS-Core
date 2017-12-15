function printFigureOf4Squares(n) {

    let length = n;
    if (n % 2 === 0) {

        length -= 1;
    }

    let result = "";
    let dashOrSpaceCount = ((2 * n - 1) - 3) / 2;

    for (let row = 0; row < length; row++) {

        let plusOrPipe = "|";
        let dashOrSpace = " ";

        if (row === 0 || row === Math.floor((n - 1) / 2) || row === length - 1) {

            plusOrPipe = "+";
            dashOrSpace = "-"
        }

        result += `${plusOrPipe}${dashOrSpace.repeat(dashOrSpaceCount)}${plusOrPipe}${dashOrSpace.repeat(dashOrSpaceCount)}${plusOrPipe}\n`;
    }

    return result;
}