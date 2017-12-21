function aggregateElements(elements) {

    function aggregate(arr, initValue, func) {

        let currentValue = initValue;

        for (let element = 0; element < arr.length; element++) {

            currentValue = func(currentValue, arr[element]);
        }

        return currentValue;
    }

    console.log(aggregate(elements, 0, (a, b) => a + b));
    console.log(aggregate(elements, 0, (a, b) => a + 1 / b));
    console.log(aggregate(elements, "", (a, b) => a + b));
}