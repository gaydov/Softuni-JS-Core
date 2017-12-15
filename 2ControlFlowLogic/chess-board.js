function printChessBoard(sideSize) {

    let result = "<div class=\"chessboard\">\n";


    for (let row = 0; row < sideSize; row++) {

        result += " <div>\n";

        for (let col = 0; col < sideSize; col++) {

            let color = "white";
            if ((row + col) % 2 === 0) {
                color = "black";
            }

            result += `<span class=\"${color}\"></span>\n`;
        }

        result += " </div>\n";
    }

    result += "</div>";
    return result;
}