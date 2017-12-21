function printCookingOperations(input) {

    function getResultOfCookingOperation(num, operation) {

        switch (operation) {

            case "chop":
                return num / 2;

            case "dice":
                return Math.sqrt(num);

            case "spice":
                return num + 1;

            case "bake":
                return num * 3;

            case "fillet":
                return num * 0.8;
        }
    }

    let currentNum = Number(input[0]);

    for (let index = 1; index < input.length; index++) {

        currentNum = getResultOfCookingOperation(currentNum, input[index]);
        console.log(currentNum);
    }
}