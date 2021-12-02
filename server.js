var http = require('http');
var fs = require('fs');
var mySet = function(request, response){
    var url = request.url;
    if(request.url === '/'){
        url = '/index.html';
    }
    response.writeHead(200, {'Content-Type': 'text/html'});
    var htmlFile = fs.readFileSync(__dirname + url);
    response.end(htmlFile);
}

var app = http.createServer(mySet);
app.listen(8080);