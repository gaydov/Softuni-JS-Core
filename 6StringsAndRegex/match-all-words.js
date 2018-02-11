function printMatchedWords(text) {

    let result = text.match(/\w+/g);
    console.log(result.join('|'));
}