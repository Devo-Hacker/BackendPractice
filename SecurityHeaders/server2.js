import express from 'express';

import http from 'http';

import {server} from 'socket.io';

import path from 'path';

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new server(server);

app.use(express.static(path.join(__dirname, 'public')));

//html file
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', ''));
})

io.on('connection', (socket) =>{
    console.log('user connected', socket.id);
    socket.on('chatMessage', (msg) =>{
        console.log('message', msg);

        io.emit('chatMessage', {
            user: socket.id,
            text: msg
        })
    })
    socket.on('disconnected', ()=>{
        console.log('user disconnected');
    });
});

server.listen(3000, ()=>{
    console.log("server started");
})