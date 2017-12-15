function isPointInRectangle(args) {

    let [x, y, xMin, xMax, yMin, yMax] = args;

    let isInside = x >= xMin && x <= xMax && y >= yMin && y <= yMax;

    if (isInside) {
        return "inside";
    }

    return "outside";
}