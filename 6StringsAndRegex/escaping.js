function escapeHtml(html) {

    function getReplacer(character) {

        switch (character) {

            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
        }
    }

    let result = '<ul>\n';

    for (let element of html) {
        let newLine = ' <li>';

        for (let symbol of element) {

            if (symbol === '<' ||
                symbol === '>' ||
                symbol === '"' ||
                symbol === '&') {

                symbol = getReplacer(symbol);
            }

            newLine += symbol;
        }

        newLine += '</li>\n';
        result += newLine;
    }

    result += '</ul>';
    return result;
}