function printTowsPopulations(strArr) {

    const splitPattern = /\s<->\s/g;
    let townsMap = new Map();

    for (let line of strArr) {

        let townWithPopulation = line.split(splitPattern);
        let town = townWithPopulation[0];
        let population = Number(townWithPopulation[1]);

        if (!townsMap.has(town)) {
            townsMap.set(town, population);
        } else {
            let currentPopulation = townsMap.get(town);
            townsMap.set(town, currentPopulation + population);
        }
    }

    for(let [key, value] of townsMap) {

        console.log(`${key} : ${value}`);
    }
}