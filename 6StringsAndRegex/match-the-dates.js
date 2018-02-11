function printMatchedDates(text) {
    let regex = /\b([\d]{1,2})-([A-Z][a-z]{2})-([\d]{4})\b/g;

    for (let index = 0; index < text.length; index++) {

        let sentence = text[index];
        let match;

        while (match = regex.exec(sentence)) {

            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        }
    }
}