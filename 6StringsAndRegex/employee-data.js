function printValidEmployeeData(inputArr) {
    const regex = /^([A-Z][A-Za-z]*) - ([1-9]+[0-9]*) - ([\w \-]+)$/g;
    let match;

    for (let emp of inputArr) {

        while (match = regex.exec(emp)) {
            console.log(`Name: ${match[1]}`);
            console.log(`Position: ${match[3]}`);
            console.log(`Salary: ${match[2]}`);
        }
    }
}