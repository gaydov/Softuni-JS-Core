function printSortedUsernames(strArr) {

    let usernamesSet = new Set();

    strArr.forEach(u => usernamesSet.add(u));

    function sortLengthAscAlphabetically(a, b) {

        let firstUsernameLength = a.length;
        let secondUsernameLength = b.length;

        if (firstUsernameLength < secondUsernameLength) {
            return -1;
        } else if (firstUsernameLength > secondUsernameLength) {
            return 1;
        } else {
            return a.localeCompare(b);
        }
    }

    let sortedUsernames = [...usernamesSet].sort(sortLengthAscAlphabetically);
    sortedUsernames.forEach(u => console.log(u));
}