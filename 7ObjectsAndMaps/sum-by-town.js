function printJsonSumByTown(strArr) {

    let resultObj = {};

    for (let index = 0; index < strArr.length; index += 2) {

        let townProperty = strArr[index];
        let income = Number(strArr[index + 1]);

        if (!resultObj.hasOwnProperty(townProperty)) {
            resultObj[townProperty] = income;
        } else {
            resultObj[townProperty] += income;
        }
    }

    console.log(JSON.stringify(resultObj));
}