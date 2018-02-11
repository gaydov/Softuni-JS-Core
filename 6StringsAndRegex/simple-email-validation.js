function isEmailValid(email) {

    const regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g;
    let isValid = regex.test(email);

    if (isValid) {
        return 'Valid';
    } else {
        return 'Invalid';
    }
}