function printSplitText(text) {

    const regex = /[\s\)\(,;\.]/g;
    let resultArr = text.split(regex).filter(x => x !== '');

    for (let element of resultArr) {

        console.log(element);
    }
}