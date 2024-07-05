// receive.js
const connect = require('./rabbitmq');

async function receiveMessage() {
    const channel = await connect();
    channel.consume('hello', (msg) => {
        if (msg !== null) {
            console.log(" [x] Received '%s'", msg.content.toString());
            channel.ack(msg);
        }
    }, { noAck: false });
}

receiveMessage();

