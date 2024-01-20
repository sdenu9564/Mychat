import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
    const newUser = { ...userData, socketId };
    if (!users.some(user => user.sub === userData.sub)) {
        users.push(newUser);
    }
    console.log(socketId);
    return users; // Return the updated users array
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    console.log(users,'--------------------');
    return users.find(user => user.sub === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userData => {
        users = addUser(userData, socket.id); // Update the users array
        io.emit("getUsers", users);
    })

    //send message
   //send message
socket.on('sendMessage', (data) => {
    console.log(data);
    const user = getUser(data.receiverId);

    if (user) {
        console.log(user);
        io.to(user.socketId).emit('getMessage', data);
    } else {
        // Handle the case where the user is not found (optional)
        console.log('User not found');
        // You can emit an event or take other actions as needed
    }
});


    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})