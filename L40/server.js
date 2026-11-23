const express=require('express');
const http=require('http');
const app=express();
const socket=require("socket.io")
const port=3000;


const server=http.createServer(app);

const io=new socket.Server(server,
    {
        cors:{
            origin:"*",
            methods:["GET","POST"]
        }
    }
)

io.on("connection", (socket)=>{
    console.log("Client connected", socket.id);

    io.on("message",(msg)=>{
        socket.emit("message",msg)
    })

    io.on("disconnect",()=>{
        console.log("user disconnected")
    })
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});