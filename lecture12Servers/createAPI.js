const http = require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200, { 'content-Type': 'application\json' });
    resp.write(JSON.stringify({name:'qasim',email:'qasim007'}));

    resp.end();
}).listen(5000);