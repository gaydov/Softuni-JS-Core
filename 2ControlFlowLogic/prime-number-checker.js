function isNumberPrime(num) {

    if (num === 0 || num === 1 || num < 0) {

        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {

        if (num % divisor === 0) {
            return false;
        }
    }

    return true;
}