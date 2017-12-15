function printMultiplicationTable(n) {

    let html = "<table border=\"1\">\n";

    for (let row = 0; row < n + 1; row++) {

        html += "  <tr>";

        for (let col = 0; col < n + 1; col++) {

            if (row === 0 && col === 0) {

                html += "<th>x</th>";
            } else if (row === 0) {

                html += `<th>${col}</th>`;
            } else {

                if (col === 0) {

                    html += `<th>${row}</th>`;
                } else {

                    html += `<td>${row * col}</td>`;
                }
            }
        }

        html += "</tr>\n";
    }

    html += "</table>";

    return html;
}