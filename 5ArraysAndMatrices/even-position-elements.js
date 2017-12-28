function extractElementsOnEvenPositions(strArr) {

    let resultArray = [];

    for (let i = 0; i < strArr.length; i++) {

        if (i % 2 === 0) {
            resultArray.push(strArr[i]);
        }
    }

    return resultArray.join(' ');
}