function printIsPointValid([x1, y1, x2, y2]) {

    function isDistanceBetweenTwoPointsAnInteger(x1, y1, x2, y2) {

        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance === parseInt(distance.toString(), 10);
    }

    function getIfTwoPointsAreValidAsString(x1, y1, x2, y2) {

        let status = "valid";

        if (!isDistanceBetweenTwoPointsAnInteger(x1, y1, x2, y2)) {
            status = "invalid";
        }

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`;
    }

    console.log(getIfTwoPointsAreValidAsString(x1, y1, 0, 0));
    console.log(getIfTwoPointsAreValidAsString(x2, y2, 0, 0));
    console.log(getIfTwoPointsAreValidAsString(x1, y1, x2, y2));
}