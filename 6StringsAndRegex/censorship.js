function censorText(text, words) {

    for (let word of words) {

        let indexOfWord = text.indexOf(word);
        while (indexOfWord !== -1) {

            text = text.replace(word, '-'.repeat(word.length));
            indexOfWord = text.indexOf(word, indexOfWord + 1);
        }
    }

    return text;
}