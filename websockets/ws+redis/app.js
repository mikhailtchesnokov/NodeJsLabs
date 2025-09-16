const http=require('http');
const path=require('path');
const fs=require('fs');
const WebSocket=require('ws');
const Redis = require("ioredis");

const redisPublisher = new Redis();
const redisSubscriber = new Redis();

const server = http.createServer((req,res)=>{

    const htmlPath=path.join(__dirname,'index.html');
    fs.readFile(htmlPath,(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Error has occurred during file read');
        }else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        }
    });
});

const webSocketServer=new WebSocket.Server({server});

webSocketServer.on('connection',(ws)=>{
    console.log('New client connected');    
   ws.on('message',(message)=>{
       console.log(`Received message: ${message}`);
       redisPublisher.publish("chat_messages", message);
       // Echo the message back to the client
       //ws.send(`You said: ${message}`);
         // Broadcast the message to all connected clients
        //  wss.clients.forEach(client=>{
        //      if(client.readyState===WebSocket.OPEN){
        //          client.send(`Client says: ${message}`);
        //      }
        //  });
   });
});

redisSubscriber.subscribe("chat_messages");
console.log("sub", redisSubscriber.subscribe("messages"));

redisSubscriber.on("message", (channel, message) => {
  console.log("redis", channel, message);
  for (const client of webSocketServer.clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
});

const port = process.argv[2] || 3459;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

