const {Client} = require('pg')
const connectionString = "postgres://postgres:postgres@localhost:5432/users"

var client = new Client({
  connectionString: connectionString
})

client.connect().then(() => {
    console.log('Connected to the database')

    const insertQuery = 'INSERT INTO users("Name") VALUES($1)';
    const values = ['John Doe'];

    client.query(insertQuery, values)
        .then((res) => {
            console.log('Insert successful:', res);
        })
        .catch((err) => {
            console.error('Error executing insert query:', err);
        })
        .finally(() => {
            client.end();
        });
}).catch(err => {
    console.error('Error connecting to the database', err)
})
