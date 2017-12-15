function calcDistanceBetweenTwoPoints([firstPointX, firstPointY, firstPointZ, secondPointX, secondPointY, secondPointZ]) {

    return Math.sqrt(
        Math.pow(secondPointX - firstPointX, 2) +
        Math.pow(secondPointY - firstPointY, 2) +
        Math.pow(secondPointZ - firstPointZ, 2));
}