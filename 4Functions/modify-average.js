function modifyAndGetAverage(num) {

    function getAverage(number) {

        let numString = number.toString();
        let sum = 0;

        for (let index = 0; index < numString.length; index++) {

            sum += Number(numString[index]);
        }

        return sum / numString.length;
    }

    let avgValue = getAverage(num);

    while (avgValue <= 5) {

        num += "9";
        avgValue = getAverage(num);
    }

    return num;
}