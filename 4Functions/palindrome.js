function isPalindrome(input) {

    for (let index = 0; index < input.length / 2; index++) {

        if (input[index] !== input[input.length - 1 - index]) {
            return false;
        }

        return true;
    }
}