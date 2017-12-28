function getEqualElementsCount(matrix) {

    let count = 0;

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[row].length; col++) {

            // down
            if (row !== matrix.length - 1) {

                if (matrix[row][col] === matrix[row + 1][col]) {
                    count++;
                }
            }

            // right
            if (col !== matrix[row].length - 1) {

                if (matrix[row][col] === matrix[row][col + 1]) {
                    count++;
                }
            }
        }
    }

    return count;
}