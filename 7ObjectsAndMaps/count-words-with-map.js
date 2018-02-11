function printCountedWords(strArr) {

    const regex = /\w+/gi;
    let matches = strArr[0].match(regex);

    let resultMap = new Map();

    for (let index = 0; index < matches.length; index++) {

        let currentKey = matches[index].toLowerCase();

        if (!resultMap.has(currentKey)) {
            resultMap.set(currentKey, 1);
        } else {
            let currentValue = resultMap.get(currentKey);
            resultMap.set(currentKey, currentValue + 1);
        }
    }

    let sortedMap = [...resultMap.entries()].sort();

    for (let [key, value] of sortedMap) {

        console.log(`'${key}' -> ${value} times`);
    }
}