function printNonDecreasingSubsequence(array) {

    let max = Number.MIN_SAFE_INTEGER;

    for (let num of array) {

        if (num >= max) {

            max = num;
            console.log(max);
        }
    }
}