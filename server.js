var http = require('http');
var fs = require('fs');
var mySet = function(request, response){
    var url = request.url;
    if(request.url === '/'){
        url = '/index.html';
    }
    response.writeHead(200, {'Content-Type': 'text/html'});
    var htmlFile = fs.readFileSync(__dirname + url);
}