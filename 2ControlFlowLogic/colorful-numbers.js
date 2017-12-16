function printHTMLWithColorfulNums(endValue) {

    let result = "<ul>\n";

    for (let number = 1; number <= endValue; number++) {

        let color = "green";
        if (number % 2 === 0) {
            color = "blue";
        }

        result += `    <li><span style="color: ${color}">${number}</span></li>\n`;
    }

    result += "</ul>";
    return result;
}