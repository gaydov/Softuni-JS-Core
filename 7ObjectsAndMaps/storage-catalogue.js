function printStorageSorted(strArr) {

    const splitPattern = /\s:\s/g;
    let productsMap = new Map();

    for (let product of strArr) {

        let [name, price] = product.split(splitPattern);
        productsMap.set(name, Number(price));
    }

    let sortedProductsMap = new Map([...productsMap.entries()].sort());

    let sortLetter = '';
    for (let [name, price] of sortedProductsMap) {

        let firstLetter = name.substr(0, 1);

        if (firstLetter !== sortLetter) {
            sortLetter = firstLetter;
            console.log(firstLetter);
        }

        console.log(`  ${name}: ${price}`);
    }
}