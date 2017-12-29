function printArrayWithDelimiter(strArray) {

    let delimiter = strArray[strArray.length - 1];
    strArray.pop();

    console.log(strArray.join(delimiter));
}