const amqp = require('amqplib');

const exchangeName = 'topic_logs';

async function sendTopicMessage() {
  let connection;
  try {
    connection = await amqp.connect('amqp://admin:secret@localhost');
    const channel = await connection.createChannel();

    // Assert the topic exchange
    await channel.assertExchange(exchangeName, 'topic', { durable: true });

    const routingKey1 = 'user.logs.info';
    const message1 = 'User logged in: John Doe';
    channel.publish(exchangeName, routingKey1, Buffer.from(message1));
    console.log(` [x] Sent '${message1}' with routing key '${routingKey1}'`);

    const routingKey2 = 'system.logs.error';
    const message2 = 'Database connection error';
    channel.publish(exchangeName, routingKey2, Buffer.from(message2));
    console.log(` [x] Sent '${message2}' with routing key '${routingKey2}'`);

    const routingKey3 = 'user.logs.warning';
    const message3 = 'User activity timeout';
    channel.publish(exchangeName, routingKey3, Buffer.from(message3));
    console.log(` [x] Sent '${message3}' with routing key '${routingKey3}'`);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 1000);
  } catch (error) {
    console.error('Error in producer:', error);
    if (connection) connection.close();
    process.exit(1);
  }
}

sendTopicMessage();
