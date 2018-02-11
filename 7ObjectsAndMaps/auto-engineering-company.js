function printCompanyCatalog(strArr) {

    let splitPattern = /\s\|\s/g;
    let brands = new Map();

    for (let carArgs of strArr) {

        let [brand, model, quantity] = carArgs.split(splitPattern);

        if (!brands.has(brand)) {

            brands.set(brand, new Map());
            brands.get(brand).set(model, Number(quantity));
        } else {

            if (!brands.get(brand).has(model)) {

                brands.get(brand).set(model, Number(quantity));
            } else {
                let previousCount = brands.get(brand).get(model);
                brands.get(brand).set(model, Number(Number(previousCount) + Number(quantity)));
            }
        }
    }

    for (let [brand, models] of brands) {

        console.log(brand);

        for (let [model, quantity] of models) {

            console.log(`###${model} -> ${quantity}`);
        }
    }
}