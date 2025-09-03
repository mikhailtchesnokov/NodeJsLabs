const {Client} = require('pg')
const { text } = require('stream/consumers')
const connectionString = "postgres://postgres:postgres@localhost:5432/users"

var client = new Client({
  connectionString: connectionString
})

client.connect().then(() => {
    console.log('Connected to the database')

    const query = {
        name: 'get-users', 
        text: 'SELECT * FROM users where id = $1',
        values: [1]
    }

    client.query(query, (err, res) => {
        if (err) {
            console.error('Error executing query', err)
        } else {
            console.log('Query result:', res.rows)
        }
        client.end()
    })
}).catch(err => {
    console.error('Error connecting to the database', err)
})
