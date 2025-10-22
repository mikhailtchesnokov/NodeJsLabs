const https = require('https');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/users?_limit=2',
    port: 443,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const requestData = {
    name: 'New User',
    username: 'digitalocean',
    email: 'user@digitalocean.com',
    address: {
        street: 'North Pole',
        city: 'Murmansk',
        zipcode: '12345-6789',
    },
    phone: '555-1212',
    website: 'digitalocean.com',
    company: {
        name: 'DigitalOcean',
        catchPhrase: 'Welcome to the developer cloud',
        bs: 'cloud scale security'
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

request.on('error', (err) => {
    console.error(`Encountered an error trying to make a request: ${err.message}`);
});

// Write request data and end the request
request.write(JSON.stringify(requestData));
request.end();
