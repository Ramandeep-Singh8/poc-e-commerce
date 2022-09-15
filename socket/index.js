import { Server } from "socket.io";
const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (email, socketId) => {
  !onlineUsers.some((user) => user.email === email) &&
    onlineUsers.push({ email, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (email) => {
  return onlineUsers.find((user) => user.email === email);
};

io.on("connection", (socket) => {
  socket.on("newUser", ({ email }) => {
    addNewUser(email, socket.id);
    console.log("user connected");
  });
  socket.on("sendNotification", ({ email, message }) => {
    const msg = message + " by " + email;
    console.log(msg);
    socket.emit("sendNotification", msg);
    // const receiver = getUser(email);
    // io.to(receiver.socketId).emit("getNotification", msg);
  });

  socket.on("sendText", ({ senderName, receiverName, text }) => {
    const receiver = getUser(receiverName);
    io.to(receiver.socketId).emit("getText", {
      senderName,
      text,
    });
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(5000);
