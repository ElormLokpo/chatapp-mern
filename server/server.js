const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const {Server} = require('socket.io');
const connectDB = require('./utils/dbConfig');
const cors = require('cors');
const errorHandler = require('./middleware/error.handler.middleware');

const userRoutes = require('./routes/user.routes')

dotenv.config({path:'./config/.env'});
const app = express();

const server = http.createServer(app);
connectDB();

app.use(express.json());
app.use(errorHandler);
app.use(cors());
app.use('/auth', userRoutes);

const io = new Server(server, {
    cors:{
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket)=>{
    console.log('Connected to Socket Server');
   
    
    socket.on('join-room', (data)=>{
        socket.join('first-room');
        console.log(`Room joined by ${socket.id}`);
    });

    socket.on('send-message', (data)=>{
        console.log(data);
        socket.to(data.room).emit('receive_message', data);
    })

})


const PORT = process.env.PORT;
server.listen(PORT, console.log(`Server connected on PORT:5000`));