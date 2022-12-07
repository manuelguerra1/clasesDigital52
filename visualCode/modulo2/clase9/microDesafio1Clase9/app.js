const fs = require("fs")
console.log(fs);

const datos = fs.readFileSync(__dirname + "/peliculas.js", "utf-8")
console.log(datos);


const peliculas = require("./peliculas");
console.log(peliculas);

// muestra de mis pelis por terminal mediante un ciclo
for (let index = 0; index < peliculas.length; index++) {
    console.log(peliculas[index]);
    
}

// ruta archivo txt
let ruta = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8")
console.log(`el mensaje del archivo txt es este: ${ruta}`);