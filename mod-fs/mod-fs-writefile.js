const fs = require("fs");

fs.writeFile("./texto.txt", "example of mod-fs-writefile", function (err) {
    if (err) {
        console.log(err);
    }
    console.log("archivo creado");
});

console.log("última linea de código");