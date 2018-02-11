function printSortedArrays(strArrJsons) {

    let set = new Set();

    for (let arr of strArrJsons) {

        set.add(JSON.parse(arr).map(Number).sort((a, b) => b - a).join(', '));
    }

    let sortedSet = [...set].sort((a, b) => a.split(', ').length - b.split(', ').length);

    sortedSet.forEach(a => console.log(`[${a}]`));
}