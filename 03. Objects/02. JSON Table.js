function jsonTable(input) {
    let html = '<table>\n'

    for (let index = 0; index < input.length; index++) {
        let parseData = JSON.parse(input[index]);

        const openingTag = '\t\t<td>';
        const closeTag = '</td>\n';

        html += '\t<tr>\n';
        html += openingTag + parseData.name + closeTag;
        html += openingTag + parseData.position + closeTag;
        html += openingTag + parseData.salary + closeTag;
        html += '\t</tr>\n'
    }

    return html + '</table>';
}