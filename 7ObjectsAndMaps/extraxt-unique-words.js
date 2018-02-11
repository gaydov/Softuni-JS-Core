function printUniqueWords(strArr) {

    const splitPattern = /\W+/g;
    let uniqueWords = new Set();

    for (let line of strArr) {

        let words = line.toLowerCase()
            .split(splitPattern)
            .filter(w => w !== '');

        words.forEach(w => uniqueWords.add(w));
    }

    console.log([...uniqueWords].join(', '));
}