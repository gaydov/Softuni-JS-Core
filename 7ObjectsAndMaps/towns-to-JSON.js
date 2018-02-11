function printTownsJSON(inputArr) {

    const splitPattern = /\s*[|]\s*/g;
    let townsProperties = inputArr[0].split(splitPattern).filter(x => x !== '');
    let result = [];

    for (let index = 1; index < inputArr.length; index++) {

        let currentTownArgs = inputArr[index].split(splitPattern).filter(x => x !== '');

        let currentTown = {};
        currentTown[townsProperties[0]] = currentTownArgs[0];
        currentTown[townsProperties[1]] = Number(currentTownArgs[1]);
        currentTown[townsProperties[2]] = Number(currentTownArgs[2]);

        result.push(currentTown);
    }

    console.log(JSON.stringify(result));
}