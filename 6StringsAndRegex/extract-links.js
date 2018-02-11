function printValidLinks(arr) {

    const regex = /www\.[A-Za-z\d\-]+\.[a-z]+(\.[a-z]+)*/g;
    let validLinks = [];

    for (let index = 0; index < arr.length; index++) {

        let match = regex.exec(arr[index]);
        while (match) {

            validLinks.push(match[0]);
            match = regex.exec(arr[index]);
        }

    }

    console.log(validLinks.join('\n'));
}