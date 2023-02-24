const express = require('express');
const {createServer} = require('http');
const cors = require('cors');
const {Server} = require('socket.io');
const dotenv = require('dotenv');

dotenv.config({path:'./config/.env'});


const app = express();
app.use(cors()); 
const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods : ['GET','POST']
    }
});

io.on('connection', (socket)=>{
    console.log(`User: ${socket.id} just connected`);
    
})



const PORT = process.env.PORT;
server.listen(process.env.PORT, console.log(`Server running on PORT: ${PORT}`));