const http = require('http');

// http.createServer().listen(4500);

/** this requires some paramenters which we will discuss now */

http.createServer((req, res)=>{

    res.write("Hello welcome to My Server this is qasim malik");
    res.end();

}).listen(4500);


//tell them details about the package.json file
