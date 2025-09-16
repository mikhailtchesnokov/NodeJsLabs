const http=require('http');
const path=require('path');
const fs=require('fs');
const WebSocket=require('ws');

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

const wss=new WebSocket.Server({server});

wss.on('connection',(ws)=>{
    console.log('New client connected');    
   ws.on('message',(message)=>{
       console.log(`Received message: ${message}`);
       // Echo the message back to the client
       //ws.send(`You said: ${message}`);
         // Broadcast the message to all connected clients
         wss.clients.forEach(client=>{
             if(client.readyState===WebSocket.OPEN){
                 client.send(`Client says: ${message}`);
             }
         });
   });
});

const port = 3459;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

