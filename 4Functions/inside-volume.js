function arePointsInsideAFigure(arr) {

    function isPointInsideAFigure(x, y, z) {

        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        let isInside =  (x >= x1 && x <= x2) &&
                        (y >= y1 && y <= y2) &&
                        (z >= z1 && z <= z2);

        return isInside;
    }

    for (let index = 0; index < arr.length; index += 3) {

        let x = arr[index];
        let y = arr[index + 1];
        let z = arr[index + 2];

        if (isPointInsideAFigure(x, y, z)) {
            console.log("inside");
        }
        else {
            console.log("outside");
        }
    }
}