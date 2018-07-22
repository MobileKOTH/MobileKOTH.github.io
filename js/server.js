var HTTP = require('http');
var URL = require('url');
var FileSystem = require('fs');

HTTP.createServer(function (request, response)
{
    var query = URL.parse(request.url, true);
    var filename = "." + query.pathname;
    if (query.pathname == "/")
    {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        return response.end("<script>window.onload = function (){window.location = \"index.html\";}</script >");
    }
    else
    {
        FileSystem.readFile(filename, function (err, data)
        {
            if (err)
            {
                response.writeHead(404, { 'Content-Type': 'text/html' });
                return response.end("404 Not Found");
            }
            response.writeHead(200);
            response.write(data);
            return response.end();
        });
    }
}).listen(8080);