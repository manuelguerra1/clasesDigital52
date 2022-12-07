let operacion = "raiz cuadrada";
let valor1 = 20;
let valor2 = 40;
switch (operacion) {
    case "suma":
        console.log("el resultado de " + operacion + " es " + (valor1 + valor2));
        break;
    case "resta":
        console.log("el resultado de " + operacion + " es " + (valor1 - valor2));
        break;
    case "multiplicacion":
        console.log("el resultado de " + operacion + " es " + (valor1 * valor2));
        break;
    case "division":
        console.log("el resultado de " + operacion + " es " + (valor1 / valor2));
        break;
    case "incremento1":
        console.log("el resultado de " + operacion + " es " + (++ valor1));
        break;
    case "decremento1":
        console.log("el resultado de " + operacion + " es " + (-- valor1));
        break;
    case "incremento2":
        console.log("el resultado de " + operacion + " es " + (++ valor2));
        break;
    case "decremento2":
        console.log("el resultado de " + operacion + " es " + (-- valor2));
        break;

    default:
        console.log ("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir - incrementar - decrementar.");
        break;
}