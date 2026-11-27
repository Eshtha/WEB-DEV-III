
const express = require("express");
const http = require("http");
const socket = require("socket.io");
const app = express();
const port=3000
const server = http.createServer(app);

const io = new socket.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    socket.on("message", (msg) => {

        io.emit("message", msg);

    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });

});

server.listen(port, () => {
    console.log("Server running at port 3000");
});