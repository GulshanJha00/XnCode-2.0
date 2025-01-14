import { Server } from "socket.io";

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  console.log("Connection Done " + socket )
});

io.listen(3000);