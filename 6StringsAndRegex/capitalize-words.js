function printCapitalized(string) {

    let words = string.split(' ');
    let result = [];

    for (let word of words) {

        let capitalLetter = word.substr(0, 1).toUpperCase();
        let smallLetters = word.substring(1).toLowerCase();

        result.push(capitalLetter + smallLetters);
    }

    console.log(result.join(' '));
}