function printWordsWithCountsJson(strArr) {

    let matches = strArr[0].match(/\w+/g);
    let resultObj = {};

    for (let index = 0; index < matches.length; index++) {

        if (!resultObj.hasOwnProperty(matches[index])) {
            resultObj[matches[index]] = 1;
        } else {
            resultObj[matches[index]]++;
        }
    }

    console.log(JSON.stringify(resultObj));

}