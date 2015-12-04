var http = require('http')
var path = require('path')
var fs   = require('fs')

function requestHandler(req, res) {
   var 
    content = '',
    fileName = path.basename(req.url),
    localFolder = __dirname + '/public/';
    
    if(fileName === 'index.html') {
        content = localFolder + fileName;
        fs.readFile('index.html', function(err, contents) {
            if(!err) {
                res.end(contents);
            }else {
            console.dir(err);
            };
        });
    }else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    res.end('<h1> Sorry, the page ure lookin for aint exists in this server.<h1>');    
    };
};
   http.createServer(requestHandler).listen(3001);
    console.log("server running and ready to serve on port 3001");
