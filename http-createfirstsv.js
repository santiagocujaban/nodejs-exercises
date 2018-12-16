const http = require("http");

const handleServer = function (req, res) {
    res.writeHead(404, { "Content-type": "text/plain"});
    res.write("Esto es un simple texto");
    releaseEvents.end();
}

http.createServer(handleServer).listen(3030);