let oracion = "esta oracion ira en reversa";
function invertirTexto(invertirString){
    let stringEnArray = invertirString.split("")
    let oracionInversa = stringEnArray.reverse();
    let union = oracionInversa.join("")
    return union
}
console.log(invertirTexto(oracion));


let oracion1 = "lobo es la palabra que va a devolver";
function primeraPalabra(palabra){
    let palabraRetornada = palabra.slice(0,4);
    return palabraRetornada
}
console.log(primeraPalabra(oracion1));


let oracion2 = "la palabra que va a devolver es mosca"
function ultimaPalabra(palabra1){
    let palabraRetornada1 = palabra1.slice(32,37);
    return palabraRetornada1
}
console.log(ultimaPalabra(oracion2));


let oracion3 = "esto sera un array";
function listaDePalabras(palabra2){
    let pasadoEnArray = palabra2.split(" ")
    let cantidadPalabras = pasadoEnArray.length
    return cantidadPalabras
}
console.log(listaDePalabras(oracion3));






// const listaDePalabras1 = oracion =>{
//         let array = 0;
//         let palabras = ""
//         for (let i = 0; i < oracion.length; i++) {
//             if(oracion[i] == " "){
//                 array++
//                 palabras = ""
//             }else{
//                 palabras += oracion[i]
//             }  
//         }
//         return array
//     }
//     console.log(listaDePalabras1("hola mundo hello world adios mundo good bye world"))

    
// const listaDePalabras2 = oracion =>{
//             let array = [];
//             let palabras = ""
//             for (let i = 0; i < oracion.length; i++) {
//                 if(oracion[i] == " "){
//                     array.push(palabras)
//                     palabras = ""
//                 }else{
//                     palabras += oracion[i]
//                 }  
//             }
//             return array
// }
//console.log(listaDePalabras2("hola mundo hello world adios mundo good bye world"))


let oracion4 = "la palabra mas larga va a ser ?¿";
function palabraMasLarga(palabra3){
    let palabraLarga = palabra3.length;
    return palabraLarga
}
console.log(palabraMasLarga(oracion4))
