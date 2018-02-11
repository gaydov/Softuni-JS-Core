function printBottlesFilled(strArr) {

    let splitPattern = /\s=>\s/g;
    let juices = new Map();
    let bottles = new Map();

    for (let juice of strArr) {

        let [ingredient, quantity] = juice.split(splitPattern);

        if (!juices.has(ingredient)) {
            juices.set(ingredient, Number(quantity));
        } else {
            let alreadySavedQuantity = juices.get(ingredient);
            let newQuantity = Number(Number(quantity) + Number(alreadySavedQuantity));
            juices.set(ingredient, newQuantity);
        }

        let currentSavedQuantity = juices.get(ingredient);
        let bottlesCount = Math.trunc(currentSavedQuantity / 1000);

        if (bottlesCount > 0) {
            let remainder = Math.trunc(currentSavedQuantity % 1000);
            juices.set(ingredient, remainder);

            if (!bottles.has(ingredient)) {
                bottles.set(ingredient, bottlesCount);
            } else {
                bottles.set(ingredient, bottles.get(ingredient) + bottlesCount);
            }
        }
    }

    for (let [ingredient, count] of bottles) {
        console.log(`${ingredient} => ${count}`);
    }
}