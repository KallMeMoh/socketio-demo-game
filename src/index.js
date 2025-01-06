const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(express.static("public"));

const httpServer = createServer(app);

const io = new Server(httpServer, { /* options */ });

io.on("connect", (socket) => {
  console.log(socket.id);
});


httpServer.listen(4001, () => {
  console.log("listening on http://127.0.0.1:4001");
});