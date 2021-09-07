import http from 'http'

export function start(port) {
    const server = http.createServer((req, res) => {
        console.log(req.method);
        console.log(req.url);
        console.log(req.headers);
        
        
        res.end("Hello World v2.0")
    });
    
    server.listen(port, () => console.log("Server started"))
}

