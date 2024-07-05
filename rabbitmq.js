// rabbitmq.js
const amqp = require('amqplib');

async function connect() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('hello');
        return channel;
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        process.exit(1);
    }
}

module.exports = connect;

