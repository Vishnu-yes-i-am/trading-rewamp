const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const clients = [];

console.log("starting... ")
io.on('connection', (socket) => {
    console.log("client connected")
    // Add the new client to the list
    clients.push(socket);

    // Handle 'buy' event
    socket.on('buy', (data) => {
        // Broadcast the 'buy' event to all connected clients except the sender
        socket.broadcast.emit('buy', data);
    });

    // Handle 'sell' event
    socket.on('sell', (data) => {
        // Broadcast the 'sell' event to all connected clients except the sender
        socket.broadcast.emit('sell', data);
    });
    // Remove disconnected clients from the list
    socket.on('disconnect', () => {
        console.log('client disconnected')
        const index = clients.indexOf(socket);
        if (index !== -1) {
            clients.splice(index, 1);
        }
    });
});


// Import routes
const exampleRoutes = require('./routes/exampleRoute');

// Use routes
app.use('/example', exampleRoutes);

// Start the server
const port = 4000;
// server.listen(4000);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
