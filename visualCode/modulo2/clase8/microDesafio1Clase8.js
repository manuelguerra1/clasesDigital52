let cursosPrecios = [
    ["html5", 4000],
    ["css3", 5000],
    ["javascript", 10000],
    ["react", 7000],
    ["nodejs", 15000]
];

let cursosElegidos = ["HTML5", "CSS3"];

function calcularPrecio(catalogo, cursoQueEligio){
    let precio = 0;

    for (let index = 0; index < catalogo.length; index++) {
        let tituloDelCurso = catalogo[index][0].toUpperCase();
         console.log("cursos", tituloDelCurso);
       if(cursoQueEligio.includes(tituloDelCurso)) {
            precio = precio + catalogo[index][1];
        }
    }

    return precio;
}




function factura(nombre, apellido, catalogoCursos, cursosElegidos, callback){
    let total = callback(catalogoCursos, cursosElegidos)

    return `estimado ${nombre} ${apellido} esto es lo que tenes que pagar $${total}`;


}

console.log(factura("manuel", "guerra",cursosPrecios, cursosElegidos, calcularPrecio));