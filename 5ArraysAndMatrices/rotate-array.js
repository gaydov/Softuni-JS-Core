function rotateArray(array) {

    let rotationsCount = array.pop();

    for (let i = 0; i < rotationsCount % array.length; i++) {

        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array.join(' ');
}