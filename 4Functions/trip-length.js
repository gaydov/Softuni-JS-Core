function printPointsOrderAndDistance(inputArr) {

    let a = {
        x: Number(inputArr[0]),
        y: Number(inputArr[1])
    };

    let b = {
        x: Number(inputArr[2]),
        y: Number(inputArr[3])
    };

    let c = {
        x: Number(inputArr[4]),
        y: Number(inputArr[5])
    };

    function calculateDist(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    let abDistance = calculateDist(a.x, a.y, b.x, b.y);
    let bcDistance = calculateDist(b.x, b.y, c.x, c.y);
    let caDistance = calculateDist(c.x, c.y, a.x, a.y);

    let result = "";
    let maxDistance = Math.max(abDistance, bcDistance, caDistance);

    if (maxDistance === caDistance) {

        result = `1->2->3: ${abDistance + bcDistance}`;
    } else if (maxDistance === abDistance) {

        result = `1->3->2: ${caDistance + bcDistance}`;
    } else if (maxDistance === bcDistance) {

        result = `2->1->3: ${abDistance + caDistance}`;
    }

    console.log(result);
}

