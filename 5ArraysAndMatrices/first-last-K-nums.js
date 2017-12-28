function getTheFirstAndLastKElementsOfArray(array) {

    let k = array[0];

    let firstKElements = array.slice(1, 1 + k).join(' ');
    let lastKElements = array.slice(array.length - k).join(' ');

    return firstKElements + '\n' + lastKElements;
}