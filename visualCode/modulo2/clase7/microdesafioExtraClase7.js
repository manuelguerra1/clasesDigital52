function valorPedido(valor){
    let salto = 1 * 3
    for (let index = 1; index <= 19; index++) {
        let saltoHecho = salto * index
        valor = saltoHecho * 1
        console.log(saltoHecho);
    }    
}
valorPedido(1)



function sumaDelCeroAlCien(){
    let suma2 = 1
    for (let index = 0; index <= 100; index++) {
        let producto = index * suma2
        let resultado = `el resultado de ${suma2} + ${index} = ${producto}`
        console.log(resultado);
    }
}

sumaDelCeroAlCien(1)

function cadenaDeTexto(cadena){
    let cadena1 = cadena.toUpperCase()
    console.log(cadena1);

}
cadenaDeTexto("practicando el uso de los ciclos o bucles.");

let numeroPositivos = [ 1, 2, 3, 4, 5, 6, 88, 928, 997, 876, 545 ];
function arrayNumerosPositivos(numero){
    let numerosPares = []
    for (let index = 0; index < numero.length; index++) {
        numero[index] % 2 === 0 ? numerosPares.push(numero[index]) : "";
    }
    return console.log(numerosPares);
}

arrayNumerosPositivos(numeroPositivos)
