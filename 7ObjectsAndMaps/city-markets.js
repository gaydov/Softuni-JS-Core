function printTownsSales(strArr) {

    const splitPattern = /\s[->|:]+\s/g;
    let townsWithSales = new Map();

    for (let line of strArr) {

        let [town, product, amount, price] = line.split(splitPattern);

        if (!townsWithSales.has(town)) {
            townsWithSales.set(town, new Map());
            townsWithSales.get(town).set(product, Number(amount * price));
        } else {
            townsWithSales.get(town).set(product, Number(amount * price));
        }
    }

    for (let [key, value] of townsWithSales) {

        console.log(`Town - ${key}`);
        for (let [k, v] of value) {

            console.log(`$$$${k} : ${v}`);
        }
    }
}