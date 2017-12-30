function isMatrixMagic(matrix) {

    let previousRowSum = 0;
    let currentRowSum = 0;

    // comparing the sum of each row with the previous one
    for (let row = 0; row < matrix.length; row++) {

        previousRowSum = currentRowSum;
        currentRowSum = matrix[row].reduce((a, b) => a + b, 0);

        if (row > 0 && currentRowSum !== previousRowSum) {

            return false;
        }
    }

    let lastRowSum = currentRowSum;
    let columnsCount = matrix[0].length;
    let previousColumnSum = 0;
    let currentColumnSum = 0;

    // comparing the sum of each column with the previous one and with the sum of the last row
    for (let col = 0; col < columnsCount; col++) {

        previousColumnSum = currentColumnSum;
        currentColumnSum = 0;

        for (let row = 0; row < matrix.length; row++) {

            currentColumnSum += matrix[row][col];
        }

        if (col > 0 && (currentColumnSum !== previousColumnSum || currentColumnSum !== lastRowSum)) {

            return false;
        }
    }

    return true;
}