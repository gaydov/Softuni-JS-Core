function printWordOccurrences(string, word) {

    let regex = new RegExp(`\\b${word}\\b`, "gi");
    let matchCount = 0;
    let match = regex.exec(string);

    while (match) {
        matchCount++;
        match = regex.exec(string);
    }

    console.log(matchCount);
}