import { Socket } from "socket.io";
import socketIO from 'socket.io';

export const disconnect = (client: Socket) => {
    client.on('disconnect', () => {
        console.log('client got disconnected')
    })
}

//listen to messages
export const message = (client: Socket, io: socketIO.Server) => {
    client.on('message', (payload: {from: string, body: string}) => {

        console.log('Got messsage', payload);
        io.emit('message-new', payload);
    })
}