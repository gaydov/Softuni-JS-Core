function isMatrixMagic(matrix) {

    let currentSum = 0;

    for (let row = 0; row < matrix.length; row++) {

        let rowSum = 0;
        let colSum = 0;

        for (let col = 0; col < matrix.length; col++) {

            rowSum += matrix[row][col];
            colSum += matrix[col][row];
        }

        if (row > 0 && (currentSum !== rowSum || currentSum !== colSum)) {

            return false;
        }

        currentSum = rowSum;
    }

    return true;
}