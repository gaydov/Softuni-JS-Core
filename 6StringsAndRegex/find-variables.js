function printFoundVariables(string) {

    const regex = /\b_[A-Za-z0-9]+\b/g;
    let result = [];

    let match = regex.exec(string);
    while (match) {
        result.push(match[0].slice(1));
        match = regex.exec(string);
    }

    console.log(result.join(','));
}