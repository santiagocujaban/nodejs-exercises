const express = require("express");

const colors = require("colors");

const server = express();

server.get("/", function (req, res) {
    res.send("<h1>Hola Mundo con express y nodejs!</h1>");
    res.end();
});

server.listen(7070, function () {
    console.log("Server on port 7070".red);
});