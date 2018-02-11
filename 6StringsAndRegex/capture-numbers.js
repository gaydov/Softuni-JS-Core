function printOnlyDigits(stringArr) {
    const regex = /\d+/g;

    let result = [];

    for (let line of stringArr) {

        let match = regex.exec(line);
        while (match) {
            result.push(match[0]);
            match = regex.exec(line);
        }
    }

    console.log(result.join(' '));
}