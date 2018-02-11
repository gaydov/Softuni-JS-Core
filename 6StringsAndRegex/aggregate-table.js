function aggregateTable(inputText) {

    let towns = [];
    let sum = 0;

    for (let line of inputText) {

        line = line.split('|');
        towns.push(line[1].trim());
        sum += Number(line[2].trim());
    }

    return `${towns.join(', ')}\n${sum}`;
}