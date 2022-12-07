function encontrarElNumero(arrNum, num) {
    if (arrNum.indexOf(num) != -1){
        return `el numero ${num} esta `
    }else{
        return `el numero solicitado (${num}) no esta`
    }
}

console.log("el numerito " + encontrarElNumero([1, 3, 6, 80], 95));


let opciones = ["Toma 1" ,"Toma 2", "Pon 1", "Pon 2", "Todos ponen", "Toma todo"]
function juegoDeTrompito(opciones, vueltas) {
    let random = Math.floor(Math.random() * vueltas)
    return opciones[random];
}

console.log(juegoDeTrompito(opciones, 6));

let numeros2 = [1, 2, 3, 4, 5, 6, ,7 ,8 ,9]
function sumarParImpar(array) {
    let pares = 0;
    let impares = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            pares++
        }else{
            impares++
        }
        
    }

    return [impares, pares];
}

console.log(sumarParImpar(numeros2));