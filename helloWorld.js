var server = http.createServer(function(request, response) {
    
    var body = "Hello World";
    
    response.writeHead(200, {
        
        'Content-Length': body.length,
        
        'Content-Type': 'text/plain'
    
    });
    
    response.end(body);

});

server.listen(8080);
