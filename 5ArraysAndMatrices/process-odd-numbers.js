function getElementsOnOddPositionsDoubledAndReversed(arr) {

    let result = arr.filter((v, i) => i % 2 !== 0).map(v => v * 2).reverse();

    return result.join(' ');
}