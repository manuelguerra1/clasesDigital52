const importar = require("./collectibles")

let hotToys = importar("Hot Toys")
let bandai = importar("Bandai")
let starWars = importar("Star Wars")

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function() {
        this.figuras.forEach(figura => {
            console.log("lista de figuras" + figura.nombre);
        })
    },
    figuresByBrand: function(marcaFigura){
    let marcaDeFigura =  this.figuras.filter(figura => {
        return figura.marca == marcaFigura
    })
    return marcaDeFigura
    },
}
console.log(collectibles.figuresByBrand("Hot Toys"));