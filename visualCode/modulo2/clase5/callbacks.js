let sumar = (numero1, numero2) => numero1 + numero2; 
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);
console.log(calculadora(18, 3, restar));

let suma = (numero1, numero2) => numero1 + numero2; 
let resta = (numero1, numero2) => numero1 - numero2;
let division = (numero1, numero2) => numero1 / numero2;
let multiplicacion = (numero1, numero2) => numero1 * numero2;

let calculadora1 = (a, b, operacion) => operacion(a, b);
    console.log(calculadora(10, 20, resta));

function calculadora2(a, b, operacion) {
return operacion(a, b);
}
// la suma se ocasiona porque yo ya tengo una funcion que determina lo que significa la funcion "suma".
console.log("el resultado del calculo es", calculadora2(2, 2, suma));