function convertGradsToDegrees(grads) {

    let degrees = grads % 400;

    if (degrees < 0) {
        degrees += 400;
    }

    return degrees / 400 * 360;
}