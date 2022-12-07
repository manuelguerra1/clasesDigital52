// let miDireccion = {
//     calle: "udaondo",
//     altura: 3000,
//     localidad: "ituzaingo",    
// }

// console.log(miDireccion);

// console.log(`mi casa queda en ${miDireccion.calle}, a la altura del ${miDireccion.altura}, en la localidad de ${miDireccion.localidad}`);

let curso = {
    alumnos: 65,
    cantidadProfesores: 3,
    nombresProfesores: ["rocio ", "rocko ", "y tincho"],
    diasDeCursada: ["martes y ", " jueves"],
    horariosDeCursada: "19hs a 21:30hs",
    modalidad: function(){
        return "virtual"
    }
}

console.log(`en el curso de programacion que estoy haciendo hay ${curso.alumnos} alumnos y ${curso.cantidadProfesores} profesores, los cuales se llaman ${curso.nombresProfesores}. las clases son los ${curso.diasDeCursada} de ${curso.horariosDeCursada} de manera ${curso.modalidad()} `);

// maquina generadora de cursos rapidamente
function Curso(alumnos, cantidadProfesores, horariosDeCursada) {
    this.alumnos = alumnos
    this.cantidadProfesores = cantidadProfesores
    this.horariosDeCursada = horariosDeCursada
}
let cursoAnalisisDatos = new Curso (75, ["lautaro", "johann", "leandro"], "de 18hs a 22hs");
let cursoDigitalBusiness = new Curso (30, ["damian", "beatriz", "juan"], "de 11hs a 13hs");
let cursoWebFullStack = new Curso (100, ["jose", "nacho", "lucas"], "de 15hs a 18hs");
console.log(`el nuevo curso ${cursoAnalisisDatos} va a estar conformado por`);
console.log(`el nuevo curso ${cursoDigitalBusiness} va a estar conformado por`);
console.log(`el nuevo curso ${cursoWebFullStack} va a estar conformado por`);


// con palabra repetida
let misdatos = {
    residencia: "argentina",
    nombre: "manuel",
    apellido: "guerra",
    edad: 17,
    origen: function(){
        return `naci en ${this.residencia}`
    },
    altura: 1.93,
}


console.log(`hola, me llamo ${misdatos.nombre} ${misdatos.apellido}, actualmente vivo en ${misdatos.residencia}, tengo ${misdatos.edad} años y mido aproximadamente ${misdatos.altura}cm, y no solo vivo en ${misdatos.residencia}, sino que tambien ${misdatos.origen()} `);

// funcion constructora, asociando a la propiedada
function MediosdeTransporte(viaDeTransporte, tipoDeVehiculo){
    this.via = viaDeTransporte;    
    this.tipo = tipoDeVehiculo;
}

// ejercicio utilizando los metodos de los objetos
// Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

// Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

// La función entrenarHoras tiene las siguientes tres características:

// Recibe por parámetro la cantidad de horas.
// Resta a su energía (this.energia) la cantidad de horas x 5.
// Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
// Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

// let deportista = {
// 	energia: 100,
//     experiencia: 10,
//     nombre: "Aimar",
//     entrenarHoras: function(cantidadHoras){
//         this.energia = deportista.energia - (cantidadHoras * 5)
//         this.experiencia = deportista.experiencia + (cantidadHoras * 2)
//     }
// };

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);

// ejercicio importar modulos
// Nuestro objetivo será crear 3 variables: moduloNativo, moduloInstalado y moduloPropio, en donde cada una almacenará un módulo distinto.

// La primera deberá requerir el módulo http, la segunda el módulo axios y la tercera un módulo local exportado del archivo miFuncion. Este último archivo se encuentra en la misma carpeta que nuestro script.js.

// let moduloNativo = require("http")
// let moduloInstalado = require("axios")
// let moduloPropio = require("./miFuncion")

// ejercicio exportar modulos
// Nuestro trabajo será almacenar este array en la variable arrayDePeliculas y exportarlo usando módulos.

// let arrayDePeliculas = ["Harry Potter","Her", "Up", "Lego"];
// module.exports = arrayDePeliculas

// let fs = require("fs")

// let archivo = fs.readFileSync(__dirname + "/metodoPrueba.txt", "utf-8")

// console.log(archivo);