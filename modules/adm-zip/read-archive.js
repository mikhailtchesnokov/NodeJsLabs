const AdmZip = require('adm-zip');

async function readZipArchive(filePath) {
    try {
        const zip = new AdmZip(filePath);
        const zipEntries = zip.getEntries();
        zipEntries.forEach((entry) => {
            console.log(`Entry: ${entry.toString() }`);
        });

        zipEntries.forEach((entry) => {
            console.log(`Entry: ${entry.entryName}`);
        });
    } catch (error) {
        console.log(`Error reading zip file: ${error}`);
    }
}

readZipArchive('test.zip');