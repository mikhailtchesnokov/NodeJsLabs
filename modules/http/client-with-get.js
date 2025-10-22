const https = require('https');

const url = 'https://jsonplaceholder123.typicode.com/todos/1';

const request = https.get(url, (response) => {
    let data = '';

    if (response.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${response.statusCode}`);
        response.resume();
        return;
    }

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log('Retrieved all data from server:');
        try {
            console.log(JSON.parse(data));
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
        }
    });
});

request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});
