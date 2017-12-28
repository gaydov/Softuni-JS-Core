function reorderElements(arr) {

    let resultArr = [];

    for (let element of arr) {

        if (element < 0) {

            resultArr.unshift(element);
        } else {

            resultArr.push(element);
        }
    }

    return resultArr.join('\n');
}