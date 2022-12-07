let nombre = "Pedro";
let apellido = "Perez";
let sueldoActual = 200000;
let porcentajeAumento = 25;
let calculoAumento = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = (sueldoActual + calculoAumento);

console.log("Hola, cliente", nombre + " " + apellido);
console.log("En base a su sueldo actual:\n", sueldoActual);
console.log("Ha recibido un aumento del:\n", calculoAumento);
console.log("Y su nuevo saldo es de:\n", nuevoSueldo);
