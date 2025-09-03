const {Client} = require('pg')
const QueryStream = require('pg-query-stream');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'postgres',
    port: 5432,
});

client.connect().then(() => {
    console.log('Connected to PostgreSQL');

    const query = new QueryStream('SELECT * FROM users');
    const stream = client.query(query);

    stream.on('data', (row) => {
        console.log('Row received:', row);
    });

    stream.on('end', () => {
        console.log('Query completed');
    client.end();
    });

    stream.on('error', (err) => {
        console.error('Error executing query:', err);
    });

}).catch((err) => {
    console.error('Connection error:', err);
});

