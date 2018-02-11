function printHtmlWithScores(jsonString) {

    let dataArr = JSON.parse(jsonString);
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    function escapeHtml(html) {
        html = html
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        return html;
    }

    for (let index = 0; index < dataArr.length; index++) {

        let currentObj = dataArr[index];
        let htmlRow = `  <tr><td>${escapeHtml(`${currentObj.name}`)}</td><td>${escapeHtml(`${currentObj.score}`)}</td></tr>\n`;
        html += htmlRow;
    }

    html += '</table>';
    console.log(html);
}

printHtmlWithScores('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');