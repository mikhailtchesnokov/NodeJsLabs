const https = require('https');
const { hostname } = require('os');
const path = require('path');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users?_limit=2',
    port: 443,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

const request = https.request(options, (response) => {
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

request.end(); // <-- Add this line to send the request

request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});
