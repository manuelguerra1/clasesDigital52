let electrodomesticos = ["heladera", "microondas", "freezer", "cafetera", "horno", "ornalla"];
//console.log(electrodomesticos[0]);
//console.log(electrodomesticos[1]);
//console.log(electrodomesticos[2]);

// quitar primer elemento
let primerElementoQuitado = electrodomesticos.shift();
//console.log(primerElementoQuitado);

// agregar primer elemento al final del array
let primerElementoAlFinal = electrodomesticos.push(primerElementoQuitado);
//console.log(electrodomesticos);

// 2 productos agregados al final
let productosAgregados = electrodomesticos.push("compu", "router");
    console.log(electrodomesticos);

// cantidad de elementos del array mostrados por consola
let elementosEnConsola = electrodomesticos.length
    console.log("la cantidad de elementos que contiene el array son: " + elementosEnConsola);

// condicion de si existe o no el elemento
function resultado(existeONo){
    let busqueda = electrodomesticos.indexOf(existeONo)
    let resultadoBusqueda = busqueda > -1 ? "el producto fue encontrado" : "el producto no fue encontrado, lo siento";
    return resultadoBusqueda
} 
console.log(resultado("heladera"));

// unir el array y convertirlo en una cadena de strings
let unificacion = electrodomesticos.join(" ");
    console.log(unificacion);

// cantidad de elementos del string obtenido
let cantidadElementosString = unificacion.length
    console.log("la cantidad de caracteres que posee el string obtenido en variable es de: " + cantidadElementosString);

function cantidad(cantidadCaracteresString){
    let caracteresTotales = cantidadCaracteresString.length
    return("la cantidad de caracteres que posee el string obtenido en una funcion es de: " + caracteresTotales); 
}
console.log(cantidad(unificacion));

// cambio de nombre de producto
function cambioElemento(elementoAReemplazar, elementoQueReemplaza){
    let elementoReemplazado = unificacion.replace(elementoAReemplazar, elementoQueReemplaza);
    return elementoReemplazado;
}
let cambioElemento1 = cambioElemento("horno", "television");
    
console.log("el string modificado quedaria de esta forma: " + cambioElemento1 + ". la palabra modificada fue horno, la cual fue reemplazada por television.");

let stringAArray = cambioElemento1.split(" ")
    console.log(stringAArray);


    