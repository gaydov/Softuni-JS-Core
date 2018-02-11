function printHtmlTable(jsonString) {

    let dataArr = JSON.parse(jsonString);
    let html = '<table>\n';
    let keys = Object.keys(dataArr[0]);

    function escapeHtml(html) {
        html = html
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        return html;
    }

    html += '  <tr>';
    for (let index = 0; index < keys.length; index++) {

        html += `<th>${keys[index]}</th>`;
    }
    html += '</tr>\n';

    for (let dataIndex = 0; dataIndex < dataArr.length; dataIndex++) {

        html += '  <tr>';
        for (let index = 0; index < keys.length; index++) {

            let htmlRow = `<td>${escapeHtml(`${dataArr[dataIndex][keys[index]]}`)}</td>`;
            html += htmlRow;
        }

        html += '</tr>\n';
    }

    html += '</table>';

    console.log(html);
}
