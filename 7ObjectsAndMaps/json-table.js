function printHtmlTableFromJson(strArr) {

    let html = '<table>\n';

    for (let json of strArr) {

        let currentEmployee = JSON.parse(json);

        html += '   <tr>\n';
        html += `       <td>${currentEmployee['name']}</td>\n`;
        html += `       <td>${currentEmployee['position']}</td>\n`;
        html += `       <td>${currentEmployee['salary']}</td>\n`;
        html += '   <tr>\n';
    }

    html += '</table>';

    console.log(html);
}