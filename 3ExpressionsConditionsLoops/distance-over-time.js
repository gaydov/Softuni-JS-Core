function calcDistanceBetweenObjects([firstObjSpeedKmH, secondObjSpeedKmH, seconds]) {

    let firstObjDistance = firstObjSpeedKmH * (seconds / 3600);
    let secondObjDistance = secondObjSpeedKmH * (seconds / 3600);

    return Math.abs(firstObjDistance - secondObjDistance) * 1000;
}