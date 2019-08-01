const fs = require('fs');
const { getLineSeparator, getFileData } = require('./write-file');

const getStyles = content => {
    const styles = [];

    const locals = content.match(/exports\.locals = ([\s\S]*);/);

    if (!locals) return styles;
    let match;

    // RegExp.exec is state-full, so we need to initialize new one for each run
    const re = /"(.*?)":.*\n/g;
    while ((match = re.exec(locals[1])) !== null) styles.push(match[1]);

    return styles;
};

function typedCssModuleLoader(content, typeOfFile = 'js') {
    console.log(content);
    const tokens = getStyles(content);

    const outputPath = typeOfFile === 'js' ? this.resourcePath + '.js' : this.resourcePath + '.d.ts';
    fs.writeFile(
        outputPath,
        getFileData(tokens, getLineSeparator(content), typeOfFile),
        {},
        function() {}
    );

    return content;
}

module.exports = typedCssModuleLoader;