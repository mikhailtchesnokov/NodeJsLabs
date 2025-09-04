const amqp = require('amqplib');

const exchangeName = 'topic_logs';

async function receiveTopicMessage(bindingKey) {
  let connection;
  try {
    connection = await amqp.connect('amqp://admin:secret@localhost');
    const channel = await connection.createChannel();

    // Assert the topic exchange
    await channel.assertExchange(exchangeName, 'topic', { durable: true });

    // Assert a temporary queue. The queue will be deleted when the last consumer disconnects.
    const q = await channel.assertQueue('', { exclusive: true });
    console.log(` [*] Waiting for messages with binding key '${bindingKey}'. To exit press CTRL+C`);

    // Bind the queue to the exchange with the specified routing key pattern
    await channel.bindQueue(q.queue, exchangeName, bindingKey);

    channel.consume(q.queue, (msg) => {
      if (msg !== null) {
        console.log(` [x] Received on '${q.queue}' with key '${msg.fields.routingKey}': '${msg.content.toString()}'`);
      }
    }, {
      noAck: true // For simplicity, auto-acknowledging messages
    });
  } catch (error) {
    console.error('Error in consumer:', error);
    if (connection) connection.close();
    process.exit(1);
  }
}

// Example: Run multiple consumers listening to different topics
// Consumer 1: Listens for all 'user' logs
receiveTopicMessage('user.#');

// Consumer 2: Listens for all 'error' logs (from any source)
// receiveTopicMessage('*.logs.error');

// Consumer 3: Listens for 'info' logs specifically from 'user'
// receiveTopicMessage('user.logs.info');
