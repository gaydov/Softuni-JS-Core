function printTriangle(size) {

    let totalRows = 2 * size - 1;

    for (let row = 1; row <= totalRows; row++) {

        if (row <= size) {

            console.log("*".repeat(row));
        }
        else {

            console.log("*".repeat(totalRows - row + 1));
        }
    }
}