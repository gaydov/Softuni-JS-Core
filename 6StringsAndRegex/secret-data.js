function printHiddenData(text) {

    const nameRegex = /\*[A-Z][A-Za-z]*(?=\s|$)/g;
    const phoneRegex = /\+[\d\-]{10}(?=\s|$)/g;
    const idRegex = /![A-Za-z\d]+(?=\s|$)/g;
    const baseRegex = /_[A-Za-z\d]+(?=\s|$)/g;

    for (let paragraph of text) {

        paragraph = paragraph
            .replace(nameRegex, x => '|'.repeat(x.length))
            .replace(phoneRegex, x => '|'.repeat(x.length))
            .replace(idRegex, x => '|'.repeat(x.length))
            .replace(baseRegex, x => '|'.repeat(x.length));

        console.log(paragraph);
    }
}