function printProductsLowestPriceAndCity(strArr) {

    const splitPattern = /\s[|]\s/g;
    let productMap = new Map();

    for (let line of strArr) {

        let [town, product, price] = line.split(splitPattern);

        if (!productMap.has(product)) {
            productMap.set(product, new Map());
        }

        productMap.get(product).set(town, Number(price));
    }

    for (let [product, townsPrices] of productMap) {

        let minPrice = Number.MAX_VALUE;
        let minPriceTown = '';

        for (let [town, price] of townsPrices) {

            if (price < minPrice) {
                minPrice = price;
                minPriceTown = town;
            }
        }

        console.log(`${product} -> ${minPrice} (${minPriceTown})`);
    }
}