const os = require('os');

const EOL = {
    LF: '\n',
    CRLF: '\r\n',
};

const getLineSeparator = line => {
    if (line.includes(EOL.LF)) return EOL.LF;
    if (line.includes(EOL.CRLF)) return EOL.CRLF;
    return os.EOL;
};

const getTsFileData = (lines, eol = os.EOL, indent = '  ') => {
    const fileLines = lines.map(line => `${indent} readonly ${line}: string`).join(eol);
    return `declare const styles: {
    ${fileLines}
    };
    export = styles;
    `;
};

const getJsFileData = (lines, eol = os.EOL, indent = '  ') => {
    const fileLines = lines.map(line => `${indent} '${line}': '${line}'`).join(eol);
    return `const styles = {
    ${fileLines}
    };
    module.exports = styles;
    `;
};

const getFileData = (lines, eol = os.EOL, typeOfFile = 'js', indent = '  ') => {
    if (typeOfFile === 'js') return getJsFileData(lines, eol, indent);
    return getTsFileData(lines, eol, indent);
};

module.exports = {
    getLineSeparator,
    getFileData,
};