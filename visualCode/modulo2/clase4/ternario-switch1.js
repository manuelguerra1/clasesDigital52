// if ternario con fruta manzana

let fruta = "Manzana";

let resultado = fruta == "Manzana"?"Buenisimo, me gustan las manzanas":"Ufa, queria manzana";
console.log(resultado);

// switch
let semaforo = "Otro color";

switch(semaforo){
    case "verde":
            console.log("Puedo cruzar");
            break;
    case "amarillo":
            console.log("Precaucion");
            break;
    case "rojo":
            console.log("No cruces, hay que esperar");
            break;
    default:
        console.log("No funciona el semaforo");
        break;
}