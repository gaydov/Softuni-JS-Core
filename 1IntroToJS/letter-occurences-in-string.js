function countLetterOccurrencesInString(string, letter) {

    let count = 0;
    for (let char of string) {

        if (char === letter) {
            count++;
        }
    }

    return count;
}