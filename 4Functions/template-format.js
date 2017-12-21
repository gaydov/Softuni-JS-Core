function getXmlFormatedQuiz(input) {

    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>\n";

    for (let index = 0; index < input.length; index += 2) {

        let question = input[index];
        let answer = input[index + 1];

        xml += ` <question>\n ${question}\n </question>\n`;
        xml += ` <answer>\n ${answer}\n </answer>\n`;
    }

    xml += "</quiz>";
    return xml;
}