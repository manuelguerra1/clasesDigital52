// Funcion expresada

let sumar = function(numeroA, numeroB){
    return numeroA + numeroB;
}

console.log("la suma da", sumar(8, 19));

// Funcion declarada

function restar(numeroC, numeroD){
    return numeroC - numeroD;
}

console.log("la resta da", restar(10, 3));

// Ejemplo de scope

let mensaje = "Hola";

function saludar(){
    let mensaje = "Chau"
    return mensaje;
}
// marca el mensaje de la primer variable, ya que no esta dentro de una function (scope global)
console.log(mensaje);
// marca la variable que esta dentro de la function (scope local)
console.log(saludar());
