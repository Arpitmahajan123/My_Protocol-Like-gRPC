import { createConnection } from 'node:net';

// const client = createConnection({
//   host: 'localhost',
//   port: 9001,
// });

// Now Send Message To Server.

// const message = 'Hello from client';
// client.write(Buffer.from(message));

// Now Creating My Own Protocol.

class MyProtocol {
  constructor() {
    this.client =  createConnection({
      host: 'localhost',
      port: 9001,
    });

    this.ready = false;

    console.log('Connection Established');  
    this.ready = true;

    // agar connection tut gaya, so dubara se retry kar sakta hai

    this.client.on('end', () => {
      this.ready = false;
      console.log(`Retry connection 3-4 Times`);
    });

  }


  // Send Fuction Create Kiya hai, jo data ko send karega.
  send(data){
    
      const payload = `\n [SOF] \n ${data} \n [EOF]`;
      // ye Dayta Ko Send karega

      this.client.write(Buffer.from(payload));
    }

}

const c  = new MyProtocol();
c.send("Hello World");

