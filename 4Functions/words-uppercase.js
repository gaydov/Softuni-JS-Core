function printWordsUppercase(input) {

    let words = input.toUpperCase().split(/\W+/);

    words = words.filter(w => w !== '');
    let result = words.join(", ");
    console.log(result);
}