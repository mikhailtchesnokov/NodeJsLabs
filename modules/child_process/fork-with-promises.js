const http = require('http');
const { fork } = require('child_process');
const host = 'localhost';
const port = 8000;



const requestListener = (req, res) => {
    
    if (req.url === '/total') {

        const child = fork(__dirname + '/modules/getCount.js');
     
        child.on('message', (message) => {
            console.log('Returning /total results');
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(message);
        });

        child.send('START'); 

    } else if (req.url === '/hello') {
        console.log('Returning /hello results');
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'hello' }));
    }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});