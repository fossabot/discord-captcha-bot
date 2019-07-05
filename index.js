const Client = require('./structures/Client');

// Discord Client
const client = new Client({
    disabledEvents: ['TYPING_START'],
    status: 'idle',
    prefix: '!'
});

client.run();
client.login("YOUR TOKEN");

