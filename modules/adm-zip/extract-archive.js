const admZip = require('adm-zip');
const path = require('path');


async function extractZipArchive(zipFilePath, outputDir) {
    try {
        const zip = new admZip(zipFilePath);
        zip.extractAllTo(outputDir, true);
        console.log(`Extracted all files to ${outputDir}`);
    } catch (error) {
        console.log(`Error extracting zip file: ${error}`);
    }
}

extractZipArchive('test.zip', './extracted');
