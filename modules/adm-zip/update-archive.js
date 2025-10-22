const AdmZip = require('adm-zip');
const fs = require('fs').promises;
const path = require('path');

async function updateZipArchive(zipFilePath, fileToUpdate) {
    try {
        const zip = new AdmZip(zipFilePath);
        const zipEntries = zip.getEntries();

        const fileName = path.basename(fileToUpdate);
        const existingEntry = zipEntries.find((entry) => entry.entryName === fileName);

        if (existingEntry) {
            zip.deleteFile(existingEntry);
            console.log(`Updated ${fileName} in ${zipFilePath}`);
        } else {
            console.log(`${fileName} not found in ${zipFilePath}`);
        }

        const content = await fs.readFile(fileToUpdate);
        zip.addFile(fileName, content);
        zip.writeZip(zipFilePath);
    } catch (error) {
        console.log(`Error updating zip file: ${error}`);
    }
}

updateZipArchive('test.zip', 'file4.txt');


