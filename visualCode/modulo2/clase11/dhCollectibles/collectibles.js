// modulo propio
const fs = require("fs")
function importar(marca) {

    let nombreDePelicula = ""

    switch (marca) {
        case "Hot Toys":
            nombreDePelicula = "figuras1.json"
            break;

        case "Bandai":
            nombreDePelicula = "figuras2.json"
            break;

        case "Star Wars":
            nombreDePelicula = "figuras3.json"       
            break;

    }
    
    let figuras = JSON.parse(
        fs.readFileSync("./datos/" + nombreDePelicula, 'utf-8')
        )

    return figuras
}

console.log("importar" + importar("Hot Toys"));

module.exports = importar
