function extractTextInParentheses(text) {

    let result = [];
    let indexOpen = text.indexOf('(');
    let indexClose = text.indexOf(')');

    while (indexOpen !== -1 && indexClose !== -1 && indexOpen < indexClose) {

        result.push(text.substring(indexOpen + 1, indexClose));
        indexOpen = text.indexOf('(', indexOpen + 1);
        indexClose = text.indexOf(')', indexClose + 1);
    }

    return result.join(', ');
}

