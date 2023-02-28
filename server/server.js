const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path:'./config/.env'});
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        method: ['GET', 'POST']
    }
});


io.on('connection', (socket)=>{
    console.log(`User with ID: ${socket.id} has connected`);

    socket.on('join_room', (data)=>{
        console.log('Room Created', data);
        socket.join(data);
    })
});



server.listen(process.env.PORT, console.log(`Server running on PORT: ${process.env.PORT}`));