let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let [numero0, , numero2, , numero4] = numeros

let [, uno, , tres, , cinco, seis, siete, ocho, nueve] = numeros

let nuevoArray = [uno, tres, cinco, seis, siete, ocho, nueve]

let mascota1 = {
    nombre: "ares",
    tipo: "perro",
    color: "cafe",
    raza: "boer boel"
}

let {nombre, tipo, color, raza} = mascota1

console.log(`Hola! les presento a mi mascota, su nombre es ${mascota1.nombre}, es un hermoso ${mascota1.tipo}, de
color ${mascota1.color} y su raza es ${mascota1.raza}.`);
