function concatAndReverseString(inputArr) {

    let result = inputArr.join('').split('').reverse().join('');
    return result;
}
