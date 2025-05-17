import { createServer } from 'node:net';

const server = createServer((socket) => {
    
    console.log(`A TCP Socket Connection Open ......`);
  
    // Data Aayega Which Is Buffer Data.

    socket.on('data', (data) => {
    
        console.log('Received data from client', data.toString());

    // socket.write('Hello from server');
  });


});

server.listen(9001);






