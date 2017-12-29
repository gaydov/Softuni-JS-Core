function addOrRemoveElementsFromArray(cmdArray) {

    let number = 0;
    let resultArray = [];

    for (let cmd of cmdArray) {

        number++;

        switch (cmd) {

            case "add":
                resultArray.push(number);
                break;
            case "remove":
                resultArray.pop();
                break;
        }
    }

    if (resultArray.length > 0) {

        console.log(resultArray.join('\n'));
    } else {

        console.log("Empty");
    }
}