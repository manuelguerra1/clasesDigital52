// funcion que espera un numero, y cuando toma ese numero lo divide por 2
let laMitad = numero => numero / 2;
console.log(laMitad(8));

// toma un numA y numB, y atraves del operador flecha, que agarre el numA y lo divida por numB. (va entre parentesis porque tiene mas de 1 parametro).
let dividir = (numeroA, numeroB) => numeroA / numeroB;
console.log(dividir(20, 4));

let tengoQueTrabajar = dia => {
    if(dia == "sabado" || dia == "domingo"){
        return "No tenes que trabajar";
    }else{
        return "Si, hoy tenes que trabajar";
    }
}

console.log(tengoQueTrabajar("lunes"));