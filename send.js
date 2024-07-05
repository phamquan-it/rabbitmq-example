// send.js
const connect = require('./rabbitmq');

async function sendMessage() {
    const channel = await connect();
    const msg = 'Hello World!';
    channel.sendToQueue('hello', Buffer.from(msg));
    console.log(" [x] Sent '%s'", msg);
    setTimeout(() => {
        channel.close();
        process.exit(0);
    }, 500);
}

sendMessage();

