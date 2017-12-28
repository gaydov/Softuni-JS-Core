function getDiagonalsSums(matrix) {

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {

        mainDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][matrix.length - row - 1];
    }

    return mainDiagonalSum + ' ' + secondaryDiagonalSum;
}