const amqp = require('amqplib');
const { channel } = require('diagnostics_channel');

amqp.connect('amqp://admin:secret@localhost')
    .then(conn => {
        console.log('Connected to RabbitMQ');
        conn.createChannel().then(channel => {
            console.log('Channel created');

            channel.assertExchange("myExchange", "fanout", { durable: true });
            channel.publish("myExchange", "", Buffer.from("Hello, World!"));

        });
    })
    .catch(err => {
        console.error('Error connecting to RabbitMQ:', err);        
    });