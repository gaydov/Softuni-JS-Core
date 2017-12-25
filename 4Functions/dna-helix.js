function printHelix(n) {

    let symbols = "ATCGTTAGGG";

    function getSymbols(index) {

        let firstSymbol = symbols[index % symbols.length];
        let secondSymbol = symbols[(index + 1) % symbols.length];

        return [firstSymbol, secondSymbol];
    }

    let index = 0;
    for (let i = 0; i < n; i++) {

        let symbols = getSymbols(index);

        if (i % 4 === 0) {

            console.log(`**${symbols[0]}${symbols[1]}**`);
        } else if (i % 4 === 1) {

            console.log(`*${symbols[0]}--${symbols[1]}*`);
        } else if (i % 4 === 2) {

            console.log(`${symbols[0]}----${symbols[1]}`);
        } else if (i % 4 === 3) {

            console.log(`*${symbols[0]}--${symbols[1]}*`);
        }

        index += 2;
    }
}