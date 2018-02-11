function countSubstringOccurences(substring, text) {

    let count = 0;
    let index = text.indexOf(substring);

    while (index !== -1) {

        count++;
        index = text.indexOf(substring, index + 1);
    }

    return count;
}

