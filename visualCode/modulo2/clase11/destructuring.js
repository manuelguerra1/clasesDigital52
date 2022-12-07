let lenguajes = ["phyton", "js", "css", "java", "c++"]
// destructirng de un array

let [lenguajePhyton, lenguajeJs] = lenguajes
let [, , lenguajeCss, lenguajeJava] = lenguajes
console.log(lenguajes); 
console.log(lenguajePhyton);
console.log(lenguajeJs);
console.log(lenguajeCss);
console.log(lenguajeJava);


let prisionero = {
    nombre: "damian",
    edad: 34,
    antecedentes: true,
    delito: "asesinato",
    condena: "20 años",
}
// destructuring de objeto literal

let {nombre, antecedentes, condena} = prisionero
console.log(prisionero);
console.log(nombre);
console.log(antecedentes);
console.log(condena);
