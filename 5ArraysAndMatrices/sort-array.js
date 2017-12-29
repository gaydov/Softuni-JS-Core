function sortArray(array) {

    function sortByStringLengthAndAlphabetically(a, b) {

        if (a.length < b.length) {

            return -1;
        } else if (a.length > b.length) {

            return 1;
        } else {

            if (a.toLowerCase() < b.toLowerCase()) {

                return -1;
            } else if (a.toLowerCase() > b.toLowerCase()) {

                return 1;
            }
        }
    }

    array = array.sort(sortByStringLengthAndAlphabetically);
    console.log(array.join('\n'));
}